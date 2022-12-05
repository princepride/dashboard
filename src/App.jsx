import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';
import Dashboard from './Dashboard';
import { Login, Calendar, Todo, Home, News, Community, Recommendations } from './pages';

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={(<Login />)} />
          <Route path="/*" element={(<Dashboard />)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
