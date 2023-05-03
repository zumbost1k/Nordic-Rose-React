import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage';
import PostPage from './PostPage';
import './style_reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


