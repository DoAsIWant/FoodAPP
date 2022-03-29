import React from "react"
import Delivery from "../delivery/Delivery";
import Payment from "../payment/Payment";
import Success from "../success/Success";
import context from "../../context/PopUpContext/context";
import ClosePopUpButton from "../buttons/ClosePopUpButton";
import css from "./OrderPopUp.module.css"


export default class OrderPopUp extends React.Component{
    static contextType = context

    state = {
        "delivery": Delivery,
        "payment": Payment,
        "success": Success
    }

    changePopUp = () => {
        let Component =  this.state[this.props.type]
        return <Component/>
    }

    handleClick = () => {
        this.context.closePopUp();
    }

    render(){

        return(
            <div className={css.popup__content}>
                <ClosePopUpButton handler={this.handleClick}/>
                {this.changePopUp()}
            </div>

        )
    }
}