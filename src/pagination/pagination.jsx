import React from 'react';
import Pagination from 'rc-pagination';
const PaginationDisplay = (props) => {
    return (<>
        <div className="pagination_post">
            <Pagination
                className="pagination_data_post"
                onChange={props.paginationChange}
                total={props.postsArrayLength}
                current={props.currentPageNumber}
                pageSize={props.paginationSize}
                showSizeChanger={false}
                itemRender={props.prevNextArrow}
                onShowSizeChange={props.perPageChange}
            />
        </div>
    </>)
}
export default PaginationDisplay