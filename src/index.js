import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header';
import TopSectiom from './top_section/top_section.js';
import SectionPhoto from './section_photo/section_photo.js';
import Footer from './footer/footer.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <TopSectiom />
    <SectionPhoto />
    <Footer />
  </React.StrictMode>
);


