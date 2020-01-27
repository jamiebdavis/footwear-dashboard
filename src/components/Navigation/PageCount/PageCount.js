import React from 'react';
import classes from "./PageCount.module.css"

/**
 * Page count component.
 *
 * @param currentPage Current page user is on.
 * @param totalPages Total number of pages.
 *
 * @return {React.Element} The rendered element.
 */
const PageCount = ({currentPage, totalPages}) => {
    return (
        <div className={classes.pageCount}>
            <h4>0{currentPage + 1}<span className={classes.TotalPages}> | 0{totalPages}</span> </h4>
        </div>
    );
};

export default PageCount;
