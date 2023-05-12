import React, { useEffect, useState } from "react";
import "./read_next.css";
import { Link, useParams } from "react-router-dom";

const ReadNext = () => {
    const params = useParams();
    const [data, setPosts] = useState({ posts: [] });
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then((response) => response.json())
            .then((json) => {
                const currentPostId = parseInt(params.id)
                const postsWithoutCurrent = json.filter((post) => {
                    return post.id !== currentPostId;
                });
                setPosts({ posts: postsWithoutCurrent });
            });
    }, [params]);
    return (
        <section className="additional_articles">
            <h2 className="read_next">What to read next</h2>
            <div className="photo">
                {data.posts.map((post) => (
                    <Link to={"/posts/" + post.id} className="decoration">
                        &nbsp;
                        <div className="atribute">
                            <img
                                className="second_page_photos"
                                width="304"
                                height="176"
                                src={post.thumbnail_url}
                                alt={post.title}
                            />
                            <div>
                                <p className="text_after_images">{post.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
export default ReadNext;
