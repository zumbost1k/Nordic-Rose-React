import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import './style_reset.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';
import ScrollToTop from './scroll_to_top';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);


