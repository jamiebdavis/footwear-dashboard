import React from 'react';
import classes from "./Container.module.css"
import CustomerInitials from "../CustomerInformation/CustomerInitials/CustomerInitial";
import ProductColour from "../ProductInformation/ProductColour/ProductColour";
import ProductName from "../ProductInformation/ProductName/ProductName";
import ProductImage from "../ProductInformation/ProductImage/ProductImage";
import ProductSize from "../ProductInformation/ProductSize/ProductSize";
import ProductCategory from "../ProductInformation/ProductCategory/ProductCategory";

import {COLOUR_LIST} from '../../components/Navigation/consts'

/**
 * Container component for each post.
 *
 * @param props Customer and product data
 * @return {React.Element} The rendered element.
 */
const Container = (props) => {
    return (
        <>
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
                            <ProductColour colour={props.colour}/>
                        </div>

                        <div className="col-sm">
                            <CustomerInitials initials={props.customerInitials}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Container;
