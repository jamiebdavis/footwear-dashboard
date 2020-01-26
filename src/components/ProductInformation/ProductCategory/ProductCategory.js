import React from 'react';
import classes from "./ProductCatergory.module.css";

const ProductCategory = (props) => {
    return (
        <div className={classes.Category}>
            <p>Category:<br />{props.category}</p>
        </div>
    );
};

export default ProductCategory;
