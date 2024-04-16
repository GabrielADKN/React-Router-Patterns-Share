import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/colors" element={<ColorList />} />
        <Route path="/colors/:name" element={<ColorDetails />} />
        <Route path="*" element={<Navigate replace to="/colors" />} />
      </Routes>
    </>
  );
}

export default App;
