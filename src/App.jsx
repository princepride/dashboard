import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider';
import Dashboard from './Dashboard';
import { Login, Calendar, Todo, Home, News, Community, CustomPortfolio } from './pages';

function App() {
    return (
        <div style={{ fontFamily: 'Avenir' }}>
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route path='/Home//*' element={(<Dashboard />)} >
                            <Route path='Home' element={(<Home />)} />
                            <Route path='News' element={(<News />)} />
                            <Route path='CustomPortfolio' element={(<CustomPortfolio />)} />
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