import React from 'react'
import PageCount from "../PageCount/PageCount";
import classes from './Pagination.module.css'
import Dot from "../../UI/dot/dot";

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
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
        </nav>
    )
}

export default Pagination;