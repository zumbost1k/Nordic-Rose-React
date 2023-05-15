import React, { useEffect, useState } from 'react';
import './section_photo.css';
import { Link } from 'react-router-dom';
const SectionPhoto = () => {
    const [data, setPosts] = useState({ posts: [] })
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then(response => response.json())
            .then(data => setPosts({ posts: data }))
    }, [])
    return (
        <div>
            <section className="section_with_photo_home_page">
                <h2 className="articles_home_page"> All articles</h2>
                <div className="photo_home_page">
                    {data.posts.map((post) => <Link onClick={window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    })}
                        to={"/posts/" + post.id} className="atribute_home_page">
                        <img className="second_page_photos_home_page" width="304" height="176" src={post.thumbnail_url}
                            alt={post.title} />
                        <div>
                            <p className="text_after_images_home_page">
                                {post.title}
                            </p>
                        </div>
                    </Link>)}
                </div>
            </section>
        </div>
    );

};
export default SectionPhoto;