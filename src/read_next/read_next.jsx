import React, { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
import './read_next.css';
import { Link, useParams } from "react-router-dom";
const ReadNext = () => {
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [paginationSize, setPaginationSize] = useState(postsPerPage);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const params = useParams();
    const [data, setPosts] = useState({ post: [] });
    const [isLoading, setIsLoading] = useState({ process: true });
    useEffect(() => {
        fetch("https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts")
            .then((response) => response.json())
            .then((json) => {
                const currentPostId = parseInt(params.id)
                const postsWithoutCurrent = json.filter((post) => {
                    return post.id !== currentPostId;
                });
                setPosts({ post: postsWithoutCurrent });
                setIsLoading({ process: false })
            });
    }, [params]);

    if (!isLoading.process) {
        const perPageChange = (value) => {
            setPaginationSize(value);
            const newPerPage = Math.ceil(data.post.length / value);
            if (currentPageNumber > newPerPage) {
                setCurrentPageNumber(newPerPage);
            }
        }
        const getData = (currentPageNumber, pageSize) => {
            return data.post.slice((currentPageNumber - 1) * pageSize, currentPageNumber * pageSize);
        };
        const paginationChange = (page, pageSize) => {
            setCurrentPageNumber(page);
            setPaginationSize(pageSize)
        }

        const prevNextArrow = (currentPageNumber, type, originalElement) => {
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
                            getData(currentPageNumber, paginationSize).map((post, index) => {
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
                    <div className="pagination_post">
                        <Pagination
                            className="pagination_data_post"
                            onChange={paginationChange}
                            total={data.post.length}
                            current={currentPageNumber}
                            pageSize={paginationSize}
                            showSizeChanger={false}
                            itemRender={prevNextArrow}
                            onShowSizeChange={perPageChange}
                        />
                    </div>
                </section>

            </>
        );
    }
    else { return (<h1>Loading...</h1>) }
};

export default ReadNext;
