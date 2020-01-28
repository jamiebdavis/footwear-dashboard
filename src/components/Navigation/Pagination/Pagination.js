import React, {useEffect} from 'react'
import PageCount from "../PageCount/PageCount";
import classes from './Pagination.module.css'
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

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(pageNumbers.length === currentPage ? 0 : currentPage + 1);
            console.log("paginate ++ ")
        }, 3000);
        return () => clearInterval(interval);
    }, [currentPage]);

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
};

export default Pagination;