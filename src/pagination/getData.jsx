import React, { useEffect, useState } from 'react';
import './pagination.css'
import PaginationDisplay from '../pagination/pagination';
import { useParams } from 'react-router-dom';
const GetData = ({ postsNumber, contentToShow }) => {
    const [paginationSize, setPaginationSize] = useState(postsNumber);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const params = useParams();
    const [data, setPosts] = useState({ posts: [] });
    const [isLoading, setIsLoading] = useState({ process: true });
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        fetch(`https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/posts?page=${currentPageNumber}&page_size=${postsNumber}`)
            .then((response) => response.json())
            .then((json) => {
                setTotalPages(json.total_pages)
                const currentPostId = parseInt(params.id) || 0
                const postsWithoutCurrent = json.posts.filter((post) => {
                    return post.id !== currentPostId;
                });
                setPosts({ posts: postsWithoutCurrent });
                setIsLoading({ process: false })
            });
    }, [params, currentPageNumber, postsNumber]);
    const perPageChange = (value) => {
        setPaginationSize(value);
        const newPerPage = Math.ceil(data.posts.length / value);
        if (currentPageNumber > newPerPage) {
            setCurrentPageNumber(newPerPage);
        }
    }

    const paginationChange = (page, pageSize) => {
        setCurrentPageNumber(page);
        setPaginationSize(pageSize)
    }

    const prevNextArrow = (currentPageNumber, type, originalElement) => {
        if (type === 'prev') {
            return <button className='pagination_button_post'>Prev</button>;
        }
        if (type === 'next') {
            return <button className='pagination_button_post'>Next</button>;
        }
        return originalElement;
    }
    if (!isLoading.process) {
        return (<>
            {
                data.posts.map((post, index) => {
                    return (
                        contentToShow(post)
                    )
                })

            }
            <PaginationDisplay
                postsNumber={paginationSize}
                postsArrayLength={totalPages}
                paginationChange={paginationChange}
                currentPageNumber={currentPageNumber}
                paginationSize={paginationSize}
                perPageChange={perPageChange}
                prevNextArrow={prevNextArrow}
            />
        </>)
    }

}
export default GetData