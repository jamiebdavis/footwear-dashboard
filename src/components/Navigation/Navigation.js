import React, {useState} from 'react';
import classes from "./Navigation.module.css"

import NavigationItem from "./NavigationItem/NavigationItem";

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
    const [statusCount, setColourList] = useState(4);
    const elements = [];

    const clearFilterElement = <li className={classes.clearFilter} onClick={clearFilter}>clear filter</li>

    for (let i = 0; i < statusCount; i++) {
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
