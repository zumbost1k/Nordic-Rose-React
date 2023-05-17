import React, { useEffect, useState } from 'react';
import './section_photo.css';
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import { Link, useParams } from "react-router-dom";
const SectionPhoto = () => {
    const [perPage, setPerPage] = useState(2);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [data, setPosts] = useState({ posts: [] })
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then(response => response.json())
            .then(data => setPosts({ posts: data }))
    }, [])
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
        <div>
            <section className="section_with_photo_home_page">
                <h2 className="articles_home_page"> All articles</h2>
                <div className="photo_home_page">
                    {
                        getData(current, size).map((post, index) => {
                            return (
                                <Link 
                                    to={"/posts/" + post.id} className="atribute_home_page">
                                    <img className="second_page_photos_home_page" width="304" height="176" src={post.thumbnail_url}
                                        alt={post.title} />
                                    <div>
                                        <p className="text_after_images_home_page">
                                            {post.title}
                                        </p>
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
        </div>
    );

};


export default SectionPhoto;