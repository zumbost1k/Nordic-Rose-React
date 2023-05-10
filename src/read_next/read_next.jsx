import React, { useEffect, useState } from "react";
import "./read_next.css";
import { Link, useParams } from "react-router-dom";

const ReadNext = () => {
    const params = useParams();
    const current = params.id;
    const [data, setPosts] = useState({ posts: [] });
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then((response) => response.json())
            .then((data) => setPosts({ posts: data }));
        const correcterArr = data.posts.filter((elem) => {
            if (elem.id !== parseInt(current)) {
                return elem;
            }
        });
        setPosts({ posts: correcterArr });
    }, [params]);
    return (
        <section className="additional_articles">
            <h2 className="read_next">What to read next</h2>
            <div className="photo">
                {data.posts.map((link) => (
                    <Link to={"/posts/" + link.id} className="decoration">
                        {" "}
                        <div className="atribute">
                            <img
                                className="second_page_photos"
                                width="304"
                                height="176"
                                src={link.thumbnail_url}
                                alt={link.title}
                            />
                            <div>
                                <p className="text_after_images">{link.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
export default ReadNext;
