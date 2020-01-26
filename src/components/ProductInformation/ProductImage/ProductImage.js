import React from 'react';
import classes from "./ProductImage.module.css"

const ProductImage = ({src}) => {
    return (
        <div>
            <img className={classes.Image}
                 src={src}
                 alt="footwear"
            />
        </div>
    );
};

export default ProductImage;
