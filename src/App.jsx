import React from 'react';
import { ContextProvider } from './contexts/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard"
import { Login } from "./pages"
import { Calendar, Todo, Home, News, Community, Recommendations } from './pages';
import io from 'socket.io-client';
const mysocket = io('http://localhost:5000');


function App() {
    return (
        <div style={{ fontFamily: 'Avenir' }}>
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route path='/Home//*' element={(<Dashboard socket={mysocket} />)} >
                            {/* Use the router at Dashboard instead? */}
                            <Route path="Home" element={(<Home />)} />
                            <Route path="Recommendations" element={(<Recommendations />)} />
                            <Route path='News' element={(<News />)} />
                            <Route path='Todo' element={<Todo />} />
                            <Route path='Calendar' element={<Calendar />} />
                            <Route path='Community' element={<Community />} />
                        </Route>
                        <Route path='/' element={(<Login />)} />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </div>
    )
}

export default App