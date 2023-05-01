import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header';
import Footer from './footer/footer.jsx';
import FirtsPage from './firtsPage';
import PostPage from './PostPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<FirtsPage />} />
        <Route path="/rectangle" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);


