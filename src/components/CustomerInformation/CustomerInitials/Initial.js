import React from 'react';
import classes from "./Initials.module.css"

const Initials = (props) => {
    return (
        <div className={classes.initials}>
            <p>{props.initials}</p>
        </div>
    );
};

export default Initials;
