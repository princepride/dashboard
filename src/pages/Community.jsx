import { auth } from 'firebase'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'

import { useStateContext } from '../contexts/ContextProvider'
const axios = require('axios')

const Community = () => {
  const navigate = useNavigate();
  const { user, currentColor, currentMode } = useStateContext();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/')
  }

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
  }

  useEffect(() => {
    if (!user) {
      navigate('/');

      return;
    }
    axios.get('https://api.chatengine.io/users/me', {
      headers: {
        "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
        "user-name": user.email,
        "user-secret": user.uid,
      }
    })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.email);
        formdata.append('secret', user.uid);

        getFile(user.photoURL)
          .then((avatar) => {
            formdata.append('avatar', avatar, avatar.name);
            axios.post('https://api.chatengine.io/users/',
              formdata,
              { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY } }
            )
              .then(() => setLoading(false))
              .catch((error) => { console.log(error) })
          })
      })
  }, [user, history]);

  if (!user || loading) return "Loading..."
  //(<div className={`text-3xl ${currentMode === 'Dark' ? 'text-white' : 'text-black'}`}>
  //  Loading...
  //</div>)

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          community
        </div>
        <div onClick={handleLogout} className={`logout-tab ${currentMode === 'Dark' ? 'text-white' : 'text-black'}`}>
          Logout
        </div>
      </div>
      <ChatEngine
        height='calc(100vh - 66px)'
        projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}

      />
    </div>
  )
}

export default Community