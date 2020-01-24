import React from 'react';
import classes from "./Container.module.css"

const Container = (props) => {
    return (
        <React.Fragment>
        <div className={classes.flexContainer}>
            <div className={classes.tab}></div>

            <div className="container ">
                <div className="row" >
                    <div className="col-sm">
                        <div className={classes.item}>
                            <img className={classes.image}
                                 src="https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&amp;w=750&amp;h=531&amp;v=1" alt=""/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                            <p>{props.productName}</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className={classes.item}>
                            <p>Category:</p>
                            <p>{props.category}</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className={classes.item}>
                            <p>Size:</p>
                            <p>{props.size}</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className={classes.item}>
                            <p>Colour:</p>
                            <p>{props.colour}</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className={classes.initials}>
                            <p>{props.customerInitials}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        </React.Fragment>
    );
};

export default Container;
