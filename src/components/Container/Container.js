import React from 'react';
import classes from "./Container.module.css"
import Initials from "../CustomerInformation/CustomerInitials/Initial";
import ItemColour from "../ProductInformation/ProductColour/Colour";
import ProductName from "../ProductInformation/ProductName/ProductName";
import ProductImage from "../ProductInformation/ProductImage/ProductImage";
import ProductSize from "../ProductInformation/ProductSize/ProductSize";
import ProductCategory from "../ProductInformation/ProductCategory/ProductCategory";

import {COLOUR_LIST} from '../../components/Navigation/consts'

const Container = (props) => {
    return (
        <React.Fragment>
            <div className={classes.flexContainer} style={{borderLeft: `20px solid ${COLOUR_LIST[props.status.id]}`}} >
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <ProductImage src={props.src}/>
                        </div>
                        <div className="col-sm">
                            <ProductName name={props.productName}/>
                        </div>
                        <div className="col-sm">
                            <ProductCategory category={props.category}/>
                        </div>

                        <div className="col-sm">
                            <ProductSize size={props.size}/>
                        </div>

                        <div className="col-sm">
                            <ItemColour colour={props.colour}/>
                        </div>

                        <div className="col-sm">
                            <Initials initials={props.customerInitials}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Container;
