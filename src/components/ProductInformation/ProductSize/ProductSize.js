import React from 'react';
import classes from "./ProductSize.module.css";

const ProductSize = (props) => {
    return (
        <div className={classes.Size}>
            <p>Size:</p>
            <p>{props.size}</p>
        </div>
    );
};

export default ProductSize;
