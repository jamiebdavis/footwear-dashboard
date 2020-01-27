import React from 'react';
import classes from "./ProductCatergory.module.css";

const ProductCategory = ({category}) => {
    return (
        <div className={classes.Category}>
            <p>Category:<br />{category}</p>
        </div>
    );
};

export default ProductCategory;
