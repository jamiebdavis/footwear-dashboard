import React from 'react';
import classes from "./ProductSize.module.css";

/**
 * Product size component.
 * @param size
 *
 * @return {React.Element} The rendered element.
 */
const ProductSize = ({size}) => {
    return (
        <div className={classes.Size}>
            <p>Size:<br />{size}</p>
        </div>
    );
};

export default ProductSize;
