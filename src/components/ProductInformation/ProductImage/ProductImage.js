import React from 'react';
import classes from "./ProductImage.module.css"

/**
 * Product image component.
 * @param src
 *
 * @return {React.Element} The rendered element.
 */
const ProductImage = ({src}) => {
    return (
        <>
            <img className={classes.Image}
                 src={src}
                 alt="footwear"
            />
        </>
    );
};

export default ProductImage;
