import React from 'react';
import classes from "./Navigation.module.css"
import Dot from "../UI/dot/dot";
import NavigationItem from "./NavigationItem/NavigationItem";
import {CUSTOMER_STATUS_TYPES, COLOUR_LIST, STATUS_COUNT} from './consts'

//use value

const Navigation = (props) => {
    const elements = [];

    const clearFilterElement = <li onClick={props.clearFilter}>clear filter</li>

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
        <div>
            <ul className={classes.nav}>
                {props.filter ? clearFilterElement : elements}
            </ul>
        </div>
    );
};

export default Navigation;
