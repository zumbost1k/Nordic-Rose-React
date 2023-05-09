import React, { useEffect, useState } from 'react';
import './section_photo.css';
import { Link } from 'react-router-dom';
const SectionPhoto = () => {
    const [data, setPosts] = useState({ posts: [] })
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then(response => response.json())
            .then(data => setPosts({ posts: data }))
    })
    return (
        <div>
            <section className="section_with_photo_home_page">
                <h2 className="articles_home_page"> All articles</h2>
                <div className="photo_home_page">
                    {data.posts.map((item) => <Link to={"/posts/" + item.id} className="atribute_home_page">
                        <img className="second_page_photos_home_page" width="304" height="176" src={item.thumbnail_url}
                            alt={item.title} />
                        <div>
                            <p className="text_after_images_home_page">
                                {item.title}
                            </p>
                        </div>
                    </Link>)}
                </div>
            </section>
        </div>
    );

};
export default SectionPhoto;