import React from 'react';
import classes from "../Navigation.module.css";
import {CUSTOMER_STATUS_TYPES, COLOUR_LIST, STATUS_COUNT} from '../consts'

const NavigationItem = ({value, filterPosts}) => {

    return (
        <li
            className={classes.navItem}
            key={value}
            onClick={() => filterPosts(value)}
        >
            <span
                style={{backgroundColor: COLOUR_LIST[value]}}
                className={classes.outOfStock}></span>

            {CUSTOMER_STATUS_TYPES[value]}
        </li>
    );
};

export default NavigationItem;
