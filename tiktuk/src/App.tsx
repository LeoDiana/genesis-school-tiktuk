import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import Navbar from './components/NavBar/NavBar';
import Feed from './pages/Feed';
import UserPage from './pages/UserPage';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <ErrorHandler />
    <Routes>
      <Route path="/" element={<Feed postsPerPage={10} postsCount={30} />} />
      <Route path="/user/:username" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
