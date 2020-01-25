import React from 'react';
import classes from "./Navigation.module.css"
import Dot from "../UI/dot/dot";

const Navigation = () => {
    return (
        <div>
            <ul className={classes.nav}>
                <li className={classes.navItem}><span className={classes.readyToTry}></span> Ready to try</li>
                <li className={classes.navItem}><span className={classes.onTheWay}></span> On the way</li>
                <li className={classes.navItem}><span className={classes.inTheQueue}></span> In the queue</li>
                <li className={classes.navItem}><span className={classes.outOfStock}></span> Out of stock</li>
            </ul>
        </div>
    );
};

export default Navigation;
