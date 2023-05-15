import React, { useEffect, useState } from 'react';
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import './read_next.css';
import { Link, useParams } from "react-router-dom";
const ReadNext = () => {
    const [perPage, setPerPage] = useState(3);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
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
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = data.posts ? Math.ceil(data.posts.length / value) : 1;
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }
    const getData = (current, pageSize) => {
        return data.posts ? data.posts.slice((current - 1) * pageSize, current * pageSize) : 1;
    };
    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button className="pagenation_button">Prev</button>;
        }
        if (type === 'next') {
            return <button className="pagenation_button">Next</button>;
        }
        return originalElement;
    }
    return (

        <>
            <section className="additional_articles">
                <h2 className="read_next">What to read next</h2>
                <div className="photo">
                    {
                        getData(current, size).map((post, index) => {
                            return (
                                <Link to={"/posts/" + post.id} className="decoration">
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
                            )
                        })
                    }

                </div>
                <div className="pagenation">
                    <Pagination
                        className="pagination_data"
                        onChange={PaginationChange}
                        total={data.posts ? data.posts.length : 1}
                        current={current}
                        pageSize={size}
                        showSizeChanger={false}
                        itemRender={PrevNextArrow}
                        onShowSizeChange={PerPageChange}
                    />
                </div>
            </section>

        </>
    );
};

export default ReadNext;
