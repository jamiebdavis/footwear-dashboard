import React from 'react';
import classes from "./ProductImage.module.css"

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
