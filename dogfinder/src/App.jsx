import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs/:name" element={<DogDetails />} />
        <Route path="*" element={<Navigate replace to="/dogs" />} />
      </Routes>
    </>
  );
}

export default App;
