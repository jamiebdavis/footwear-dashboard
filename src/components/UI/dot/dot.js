import React from 'react';
import classes from "./Dot.module.css"

const Dot = ({active}) => {
    return (
        <span
            className={classes.dot}
            style={active ? {backgroundColor: '#28dec9'} : {backgroundColor: 'white'}}> </span>
    );
};

export default Dot;
