import React, { useEffect, useState } from 'react';
import './read_next.css';
import { Link } from 'react-router-dom';

const ReadNext = () => {
    const [data, setPosts] = useState({ posts: [] })
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then(response => response.json())
            .then(data => setPosts({ posts: data }))
    })
    return (
        <section className="additional_articles">
            <h2 className="read_next">What to read next</h2>
            <div className="photo">
                {data.posts.map((link) => <Link to={"/posts/" + link.id} className='decoration'> <div className="atribute">
                    <img className="second_page_photos" width="304" height="176" src={link.src}
                        alt={link.title} />
                    <div>
                        <p className="text_after_images">{link.title}</p>
                    </div>
                </div></Link>)}
            </div>
        </section>
    );

};
export default ReadNext;