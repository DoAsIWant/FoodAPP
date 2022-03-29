import React from "react"
import css from "./Delivery.module.css";
import OpenPopUpButton from "../buttons/OpenPopUpButton";
import context from "../../context/PopUpContext/context";
import {order} from "../../context/PopUpContext/key";

export default class DeliveryButtonContainer extends React.Component{
    static contextType = context

    handleClick = () =>{
        const {isValidate} = this.props;

        if (isValidate){
            this.context.openPopUp(order,"payment")
        }
    }

    render(){
        return(
            <div className={css.proceed__container}>
                <div className={css.proceed__button}>
                    <OpenPopUpButton handler={this.handleClick} text={"Proceed to payment"}/>
                </div>
            </div>
        )
    }
}