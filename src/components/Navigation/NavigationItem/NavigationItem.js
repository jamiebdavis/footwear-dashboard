import React from 'react';
import classes from "../Navigation.module.css";
import {CUSTOMER_STATUS_TYPES, COLOUR_LIST} from '../consts'

/**
 * Navigation item component.
 *
 * @param value
 * @param filterPosts
 *
 * @return {React.Element} The rendered element.
 */
const NavigationItem = ({value, filterPosts}) => {
    return (
        <li
            className={classes.navItem}
            key={value}
            onClick={() => filterPosts(value)}
        >
            <span
                style={{backgroundColor: COLOUR_LIST[value], position: "relative", right: "5px"}}
                className={classes.outOfStock}> </span>

            {CUSTOMER_STATUS_TYPES[value]}
        </li>
    );
};

export default NavigationItem;
