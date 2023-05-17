import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Pagination from 'rc-pagination';
import './section_photo.css';
const SectionPhoto = () => {
    const [postsPerPage, setPostsPerPage] = useState(2);
    const [paginationSize, setPaginationSize] = useState(postsPerPage);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [data, setPosts] = useState({ posts: [] })
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then(response => response.json())
            .then(data => setPosts({ posts: data }))
    }, [])
    const perPageChange = (value) => {
        setPaginationSize(value);
        const newPerPage = data.posts ? Math.ceil(data.posts.length / value) : 1;
        if (currentPageNumber > newPerPage) {
            setCurrentPageNumber(newPerPage);
        }
    }
    const getData = (currentPageNumber, pageSize) => {
        return data.posts ? data.posts.slice((currentPageNumber - 1) * pageSize, currentPageNumber * pageSize) : 1;
    };
    const paginationChange = (page, pageSize) => {
        setCurrentPageNumber(page);
        setPaginationSize(pageSize)
    }

    const prevNextArrow = (currentPageNumber, type, originalElement) => {
        if (type === 'prev') {
            return <button className="pagination_button">Prev</button>;
        }
        if (type === 'next') {
            return <button className="pagination_button">Next</button>;
        }
        return originalElement;
    }
    return (
        <div>
            <section className="section_with_photo_home_page">
                <h2 className="articles_home_page"> All articles</h2>
                <div className="photo_home_page">
                    {
                        getData(currentPageNumber, paginationSize).map((post, index) => {
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
                <div className="pagination">
                    <Pagination
                        className="pagination_data"
                        onChange={paginationChange}
                        total={data.posts ? data.posts.length : 1}
                        current={currentPageNumber}
                        pageSize={paginationSize}
                        showSizeChanger={false}
                        itemRender={prevNextArrow}
                        onShowSizeChange={perPageChange}
                    />
                </div>
            </section>
        </div>
    );

};


export default SectionPhoto;