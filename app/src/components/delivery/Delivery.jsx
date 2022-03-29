import React from "react";
import css from "./Delivery.module.css"
import context from "../../context/PopUpContext/context";
import {order} from "../../context/PopUpContext/key";
import DeliveryTotal from "./DeliveryTotal";
import DeliveryPayment from "./DeliveryPayment";
import DeliveryMethod from "./DeliveryMethod";
import DeliveryButtonContainer from "./DeliveryButtonContainer";

export default class Delivery extends React.Component{

    static contextType = context;

    handleClick = () => {
        this.context.openPopUp(order,"payment")
    }


    render() {
        return (
            <div className={css.delivery__content}>
                <DeliveryMethod/>

                <DeliveryPayment/>

                <DeliveryTotal/>

                <DeliveryButtonContainer isValidate={true}/>
            </div>
        )
    }
}