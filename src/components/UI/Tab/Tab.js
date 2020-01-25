import React from 'react';
import classes from "./Tab.module.css"

const Tab = (props) => {
    return (
        <div className={classes.tab} style={{backgroundColor: props.status.colour}}></div>
    );
};

export default Tab;
