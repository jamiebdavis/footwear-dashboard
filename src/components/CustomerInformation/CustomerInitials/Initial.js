import React from 'react';
import classes from "./Initials.module.css"

const Initials = ({initials}) => {
    return (
        <div className={classes.initials}>
            {initials}
        </div>
    );
};

export default Initials;
