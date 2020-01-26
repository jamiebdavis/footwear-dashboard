import React from 'react';
import classes from "./ProductSize.module.css";

const ProductSize = (props) => {
    return (
        <div className={classes.Size}>
            <p>Size:<br />{props.size}</p>
        </div>
    );
};

export default ProductSize;
