import React from 'react';
import classes from "./Dot.module.css"

/**
 * Dot component - used for pagination links.
 *
 * @param active Is link active?
 * @return {React.Element} The rendered element.
 */
const Dot = ({active}) => {
    return (
        <span
            className={classes.dot}
            style={active ? {backgroundColor: '#28dec9'} : {backgroundColor: 'white'}}> </span>
    );
};

export default Dot;
