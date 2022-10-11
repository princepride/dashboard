import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider';
import Dashboard from './Dashboard'
import { Login } from './pages'
import { Calendar, Todo, Home, News, Community, Recommendations } from './pages';

function App() {
    return (
        <div style={{ fontFamily: 'Avenir' }}>
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route path='/Home//*' element={(<Dashboard />)} >
                        </Route>
                        <Route path='/' element={(<Login />)} />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </div>
    )
}

export default App