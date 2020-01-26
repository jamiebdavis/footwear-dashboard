import React from 'react';
import classes from "./Initials.module.css"

const Initials = (props) => {
    return (
        <div className={classes.initials}>
            {props.initials}
        </div>
    );
};

export default Initials;
