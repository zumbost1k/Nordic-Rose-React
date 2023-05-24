import React, { useEffect, useState } from 'react';
import './read_next.css';
import { Link, useParams } from "react-router-dom";
import PaginationDisplay from '../pagination/getData';
const ReadNext = () => {
    const params = useParams();
    const [data, setPosts] = useState({ posts: [] });
    const [isLoading, setIsLoading] = useState({ process: true });
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then((response) => response.json())
            .then((json) => {
                const currentPostId = parseInt(params.id)
                const postsWithoutCurrent = json.posts.filter((post) => {
                    return post.id !== currentPostId;
                });
                setPosts({ posts: postsWithoutCurrent });
                setIsLoading({ process: false })
                setTotalPages(data.total_pages)
            });
    }, [params]);
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
    if (!isLoading.process) {
        return (

            <>
                <section className='additional_articles'>
                    <h2 className='read_next'>What to read next</h2>
                    <PaginationDisplay postsNumber={3} postsArray={data.posts} contentToShow={readNext} />
                </section>

            </>
        );
    }
    else { return (<h1>Loading...</h1>) }
};

export default ReadNext;