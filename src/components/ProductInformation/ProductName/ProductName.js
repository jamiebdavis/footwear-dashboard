import React from 'react';
import classes from "./ProductName.module.css"

const ProductName = (props) => {
    return (
        <div className={classes.Name}>
            <p>{props.name}</p>
        </div>
    );
};

export default ProductName;
