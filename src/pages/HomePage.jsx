import React from 'react';
import TopSection from '../top_section/top_section.jsx';
import SectionPhoto from '../section_photo/section_photo.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import ScrollToTop from '../scroll_to_top.jsx';
function HomePage() {
    return (<React.StrictMode>
        <ScrollToTop />
        <Header />
        <TopSection />
        <SectionPhoto />
        <Footer />
    </React.StrictMode>)
}
export default HomePage;