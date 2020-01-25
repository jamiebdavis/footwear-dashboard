import React from 'react';
import classes from "./Container.module.css"
import Tab from "../UI/Tab/Tab";
import Initials from "../CustomerInformation/CustomerInitials/Initial";
import ItemColour from "../ProductInformation/ProductColour/Colour";
import ProductName from "../ProductInformation/ProductName/ProductName";
import ProductImage from "../ProductInformation/ProductImage/ProductImage";
import ProductSize from "../ProductInformation/ProductSize/ProductSize";
import ProductCategory from "../ProductInformation/ProductCategory/ProductCategory";

const Container = (props) => {
    return (
        <React.Fragment>
            <div className={classes.flexContainer}>
                <Tab status={props.status}/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <ProductImage/>
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
