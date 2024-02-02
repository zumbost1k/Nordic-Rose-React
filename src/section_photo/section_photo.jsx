import React from 'react';
import { Link } from 'react-router-dom';
import './section_photo.css';
import PaginationDisplay from '../pagination/getData';
const SectionPhoto = () => {
  const sectionPhoto = (post) => {
    return (
      <div className='photo_home_page'>
        <Link to={'/posts/' + post.id} className='atribute_home_page'>
          <img
            className='second_page_photos_home_page'
            width='304'
            height='176'
            src={
              'https://nordic-rose-server-production.up.railway.app/' + post.img
            }
            alt={post.header}
          />
          <div>
            <p className='text_after_images_home_page'>{post.header}</p>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div>
      <section className='section_with_photo_home_page'>
        <h2 className='articles_home_page'> All articles</h2>
        {<PaginationDisplay postsNumber={2} contentToShow={sectionPhoto} />}
      </section>
    </div>
  );
};
export default SectionPhoto;
