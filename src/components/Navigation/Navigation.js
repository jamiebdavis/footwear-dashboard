import React from 'react';
import classes from "./Navigation.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";
import {STATUS_COUNT} from './consts'

const Navigation = (props) => {
    const elements = [];

    const clearFilterElement = <li className={classes.clearFilter} onClick={props.clearFilter}>clear filter</li>

    for (let i = 0; i < STATUS_COUNT; i++) {
        elements.push(<NavigationItem
                key={i}
                value={i}
                filterPosts={props.filterPosts}
                filter={props.filter}
            />
        )
    }

    return (
        <>
            <ul className={classes.nav}>
                {props.filter ? clearFilterElement : elements}
            </ul>
        </>
    );
};

export default Navigation;
