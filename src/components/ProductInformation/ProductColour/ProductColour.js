import React from 'react';
import classes from "./ProductColour.module.css"

/**
 * Product colour.
 * @param colour
 *
 * @return {React.Element} The rendered element.
 */
const ProductColour = ({colour}) => {
    return (
        <div className={classes.ItemColour}>
            <p>Colour:<br />{colour}</p>
        </div>
    );
};

export default ProductColour;
