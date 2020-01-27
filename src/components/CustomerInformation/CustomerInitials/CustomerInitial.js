import React from 'react';
import classes from "./Initials.module.css"

/**
 * Customer initials.
 * @param initials
 *
 * @return {React.Element} The rendered element.
 */
const CustomerInitials = ({initials}) => {
    return (
        <div className={classes.initials}>
            {initials}
        </div>
    );
};

export default CustomerInitials;
