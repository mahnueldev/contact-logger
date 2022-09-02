import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from './Router';
import Landing from '../src/pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
