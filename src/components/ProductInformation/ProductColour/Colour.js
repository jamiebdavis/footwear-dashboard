import React from 'react';
import classes from "./Colour.module.css"

const ItemColour = ({colour}) => {
    return (
        <div className={classes.ItemColour}>
            <p>Colour:<br />{colour}</p>
        </div>
    );
};

export default ItemColour;
