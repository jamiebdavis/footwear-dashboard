import React from 'react';
import classes from "./ProductName.module.css"

/**
 * Products name component.
 * @param name
 *
 * @return {React.Element} The rendered element.
 */
const ProductName = ({name}) => {
    return (
        <div className={classes.Name}>
            <p>{name}</p>
        </div>
    );
};

export default ProductName;
