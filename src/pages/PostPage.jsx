import React from 'react';
import TopSectionPost from '../top_section_post/top_section_post.jsx';
import PostSection from '../post_section/post_section.jsx';
import ReadNext from '../read_next/read_next.jsx';
import SignUp from '../sign_up/sign_up.jsx';

function PostPage() {
  return (
    <React.StrictMode>
      <TopSectionPost />
      <PostSection />
      <ReadNext />
      <SignUp />
    </React.StrictMode>
  );
}
export default PostPage;
