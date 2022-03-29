import React from "react"
import css from "./Payment.module.css";
import OpenPopUpButton from "../buttons/OpenPopUpButton";
import context from "../../context/PopUpContext/context";
import {order} from "../../context/PopUpContext/key";

export default class PaymentButtonContainer extends React.Component{
    static contextType = context

    handleClick = () =>{
        const isValidate = this.props.isValidate()

        if(isValidate){
            this.context.openPopUp(order,"success")
        }
    }
    render(){
        return(
            <div className={css.proceed__container}>
                <div className={css.proceed__button}>
                    <OpenPopUpButton handler={this.handleClick} text={"Pay now"}/>
                </div>
            </div>
        )
    }
}