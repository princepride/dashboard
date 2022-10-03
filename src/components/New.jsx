import React from 'react'
import {userProfileData } from '../data/userData';

const New = (props) => {
    const [datePublished, description, image, title, url] = props
    return (
        <div>
            {description}
        </div>
    )
}

export default New