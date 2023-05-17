import React, { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
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
    const perPageChange = (value) => {
        setSize(value);
        const newPerPage = data.posts ? Math.ceil(data.posts.length / value) : 1;
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }
    const getData = (current, pageSize) => {
        return data.posts ? data.posts.slice((current - 1) * pageSize, current * pageSize) : 1;
    };
    const paginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }

    const prevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button className="pagination_button_post">Prev</button>;
        }
        if (type === 'next') {
            return <button className="pagination_button_post">Next</button>;
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
                                <Link onClick={window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth',
                                })} to={"/posts/" + post.id} className="decoration">
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
                <div className="pagination_post">
                    <Pagination
                        className="pagination_data_post"
                        onChange={paginationChange}
                        total={data.posts ? data.posts.length : 1}
                        current={current}
                        pageSize={size}
                        showSizeChanger={false}
                        itemRender={prevNextArrow}
                        onShowSizeChange={perPageChange}
                    />
                </div>
            </section>

        </>
    );
};

export default ReadNext;
