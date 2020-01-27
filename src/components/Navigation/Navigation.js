import React from 'react';
import classes from "./Navigation.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";
import {STATUS_COUNT} from './consts'

/**
 * Navigation component.
 *
 * @param clearFilter function
 * @param filter Posts function
 * @param filter Are the posts filtered.
 *
 * @return {React.Element} The rendered element.
 */
const Navigation = ({clearFilter, filterPosts, filter}) => {
    const elements = [];

    const clearFilterElement = <li className={classes.clearFilter} onClick={clearFilter}>clear filter</li>

    for (let i = 0; i < STATUS_COUNT; i++) {
        elements.push(<NavigationItem
                key={i}
                value={i}
                filterPosts={filterPosts}
                filter={filter}
            />
        )
    }

    return (
        <>
            <ul className={classes.nav}>
                {filter ? clearFilterElement : elements}
            </ul>
        </>
    );
};

export default Navigation;
