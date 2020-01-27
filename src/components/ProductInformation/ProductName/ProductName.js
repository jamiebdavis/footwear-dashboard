import React from 'react';
import classes from "./ProductName.module.css"

const ProductName = ({name}) => {
    return (
        <div className={classes.Name}>
            <p>{name}</p>
        </div>
    );
};

export default ProductName;
