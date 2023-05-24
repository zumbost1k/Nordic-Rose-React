import React from 'react';
import './read_next.css';
import { Link } from 'react-router-dom';
import PaginationDisplay from '../pagination/getData';
const ReadNext = () => {

    const readNext = (post) => {
        return (
            <div className='photo'>
                <Link to={'/posts/' + post.id} className='decoration_post'>
                    <div className='atribute'>
                        <img
                            className='second_page_photos'
                            width='304'
                            height='176'
                            src={post.thumbnail_url}
                            alt={post.title}
                        />
                        <div>
                            <p className='text_after_images'>{post.title}</p>
                        </div>
                    </div>
                </Link></div>
        )

    }

    return (

        <>
            <section className='additional_articles'>
                <h2 className='read_next'>What to read next</h2>
                <PaginationDisplay postsNumber={3} contentToShow={readNext} />
            </section>

        </>
    );

};

export default ReadNext;