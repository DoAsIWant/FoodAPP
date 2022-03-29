import React from "react";
import css from "../../pages/Products/Products.module.css";
import OpenPopUpButton from "../buttons/OpenPopUpButton";
import popUpContext from "../../context/PopUpContext/context";
import {cart} from "../../context/PopUpContext/key";

export default class ProductButtonContainer extends React.Component{
    static contextType = popUpContext

    handleButtonClick = ()=>{
        this.props.handler();
        this.context.openPopUp(cart,"")
    }

    render() {
        return(
            <div className={css.button__wrapper}>
                <div className={css.button__inner}>
                    <OpenPopUpButton
                        handler={this.handleButtonClick}
                        text={"Process to payment"}
                    />
                </div>
            </div>
        )
    }
}