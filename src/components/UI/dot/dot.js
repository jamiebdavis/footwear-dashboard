import React from 'react';
import classes from "./Dot.module.css"

const Dot = (props) => {
    return (
        <span
            className={classes.dot}
            style={props.active ? {backgroundColor: '#28dec9'} : {backgroundColor: 'white'}}></span>
    );
};

export default Dot;
