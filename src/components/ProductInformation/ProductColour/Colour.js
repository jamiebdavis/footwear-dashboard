import React from 'react';
import classes from "./Colour.module.css"

const ItemColour = (props) => {
    return (
        <div className={classes.ItemColour}>
            <p>Colour:<br />{props.colour}</p>
        </div>
    );
};

export default ItemColour;
