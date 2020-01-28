import React, {useEffect} from 'react'
import classes from './Pagination.module.css'

import PageCount from "../PageCount/PageCount";
import Dot from "../../UI/dot/Dot";

/**
 * Pagination component.
 *
 * @param postsPerPage
 * @param totalPosts
 * @param paginate
 * @param currentPage

 * @return {React.Element} The rendered element.
 */
const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <ul className={classes.Navigation}>
                {pageNumbers.map(number => (
                    <li><a className={classes.Link} onClick={() => paginate(number)}>
                        <Dot active={number === currentPage}/>
                    </a></li>

                ))}
            </ul>
            <PageCount
                currentPage={currentPage}
                totalPages={pageNumbers.length}/>
        </>
    )
};

export default Pagination;