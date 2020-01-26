import React from 'react';
import classes from "./PageCount.module.css"

const PageCount = (props) => {
    return (
        <div className={classes.pageCount}>
            <h4>0{props.currentPage + 1}<span className={classes.TotalPages}> | 0{props.totalPages}</span> </h4>
        </div>
    );
};

export default PageCount;
