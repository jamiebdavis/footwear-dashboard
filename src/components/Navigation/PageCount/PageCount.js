import React from 'react';
import classes from "./PageCount.module.css"

const PageCount = ({currentPage, totalPages}) => {
    return (
        <div className={classes.pageCount}>
            <h4>0{currentPage + 1}<span className={classes.TotalPages}> | 0{totalPages}</span> </h4>
        </div>
    );
};

export default PageCount;
