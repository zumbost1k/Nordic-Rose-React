import React from 'react';
import TopSection from './top_section/top_section.jsx';
import SectionPhoto from './section_photo/section_photo.jsx';
import Header from './header/header';
import Footer from './footer/footer.jsx';
function HomePage() {
    return (<React.StrictMode>
        <Header/>
        <TopSection />
        <SectionPhoto />
        <Footer/>
    </React.StrictMode>)
}
export default HomePage;