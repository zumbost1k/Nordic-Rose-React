import React from 'react';
import TopSectionPost from './top_section_post/top_section_post.jsx';
import PostSection from './post_section/post_section.jsx';
import ReadNext from './read_next/read_next.jsx';
import Header from './header/header';
import Footer from './footer/footer.jsx';
function SecondPage() {
    return (<React.StrictMode>
        <Header/>
        <TopSectionPost />
        <PostSection />
        <ReadNext />
        <Footer/>
    </React.StrictMode>)
}
export default SecondPage;