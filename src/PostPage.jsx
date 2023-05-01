import React from 'react';
import TopSectionPost from './top_section_post/top_section_post.jsx';
import PostSection from './post_section/post_section.jsx';
import ReadNext from './read_next/read_next.jsx';
import SignUp from './sign_up/sign_up.jsx';
import Header from './header/header';
import Footer from './footer/footer.jsx';
function PostPage() {
    return (<React.StrictMode>
        <Header />
        <TopSectionPost />
        <PostSection />
        <ReadNext />
        <SignUp />
        <Footer />
    </React.StrictMode>)
}
export default PostPage;