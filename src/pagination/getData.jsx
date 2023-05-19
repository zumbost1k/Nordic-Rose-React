import React, { useEffect, useState } from 'react';
import "./pagination.css"
import PaginationDisplay from '../pagination/pagination';
const GetData = ({ postsNumber, postsArray, contentToShow }) => {
    const [paginationSize, setPaginationSize] = useState(postsNumber);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const perPageChange = (value) => {
        setPaginationSize(value);
        const newPerPage = Math.ceil(postsArray.length / value);
        if (currentPageNumber > newPerPage) {
            setCurrentPageNumber(newPerPage);
        }
    }
    const getData = (currentPageNumber, pageSize) => {
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
        <PaginationDisplay
            postsNumber={paginationSize}
            postsArrayLength={postsArray.length}
            paginationChange={paginationChange}
            currentPageNumber={currentPageNumber}
            paginationSize={paginationSize}
            perPageChange={perPageChange}
            prevNextArrow={prevNextArrow}

        />
    </>)
}
export default GetData