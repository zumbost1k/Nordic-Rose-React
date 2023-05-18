import React, { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
const PaginationDisplay = ({ postsNumber, postsArray, contentToShow }) => {
    const [postsPerPage, setPostsPerPage] = useState(postsNumber);
    const [paginationSize, setPaginationSize] = useState(postsPerPage);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const perPageChange = (value) => {
        setPaginationSize(value);
        const newPerPage = Math.ceil(postsArray.length / value);
        if (currentPageNumber > newPerPage) {
            setCurrentPageNumber(newPerPage);
        }
    }
    const getData = (currentPageNumber, pageSize) => {
        console.log("hi", postsArray)
        return postsArray.slice((currentPageNumber - 1) * pageSize, currentPageNumber * pageSize);
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

    return (<>
        {
            getData(currentPageNumber, paginationSize).map((post, index) => {
                return (
                    contentToShow(post)
                )
            })
        }
        <div className="pagination_post">
            <Pagination
                className="pagination_data_post"
                onChange={paginationChange}
                total={postsArray.length}
                current={currentPageNumber}
                pageSize={paginationSize}
                showSizeChanger={false}
                itemRender={prevNextArrow}
                onShowSizeChange={perPageChange}
            />
        </div>
    </>)
}
export default PaginationDisplay