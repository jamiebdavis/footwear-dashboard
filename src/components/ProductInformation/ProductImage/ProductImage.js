import React from 'react';
import classes from "./ProductImage.module.css"

const ProductImage = () => {
    return (
        <div>
            <img className={classes.Image}
                 src="https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
                 alt="footwear"
            />
        </div>
    );
};

export default ProductImage;
