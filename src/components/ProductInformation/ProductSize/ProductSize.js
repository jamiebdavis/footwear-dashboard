import React from 'react';
import classes from "./ProductSize.module.css";

const ProductSize = ({size}) => {
    return (
        <div className={classes.Size}>
            <p>Size:<br />{size}</p>
        </div>
    );
};

export default ProductSize;
