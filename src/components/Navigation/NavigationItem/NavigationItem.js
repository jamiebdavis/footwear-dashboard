import React, {useState} from 'react';
import classes from "../Navigation.module.css";

/**
 * Navigation item component.
 *
 * @param value
 * @param filterPosts
 *
 * @return {React.Element} The rendered element.
 */
const NavigationItem = ({value, filterPosts}) => {
    const [colourList, setColourList] = useState([
        '#28dec9',
        '#66c0ed',
        '#e07a14',
        '#c92f1e'
    ]);

    const [statusDescription, setStatusDescription] = useState([
        'Ready to try',
        'On the way',
        'In the queue',
        'Out of Stock'
    ]);

    return (
        <li
            className={classes.navItem}
            key={value}
            onClick={() => filterPosts(value)}
        >
            <span
                style={{backgroundColor: colourList[value], position: "relative", right: "5px"}}
                className={classes.outOfStock}> </span>

            {statusDescription[value]}
        </li>
    );
};

export default NavigationItem;
