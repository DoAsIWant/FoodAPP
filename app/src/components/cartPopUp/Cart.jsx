import React from "react"
import css from "./Cart.module.css"
import context from "../../context/PopUpContext/context";
import CartPopUpBuyedProducts from "./CartPopUpBuyedProducts";
import CartPopUpTotalPrice from "./CartPopUpTotalPrice";
import OpenPopUpButton from "../buttons/OpenPopUpButton";
import {order} from "../../context/PopUpContext/key";


export default class Cart extends React.Component{

    static contextType = context;

    handleCLick = () =>{
        this.context.openPopUp(order,"delivery")
    }

    render(){
        return(
            <div className={css.content}>
                <div className={css.container}>
                    <h1 className={css.section__header}>Your cart</h1>

                    <CartPopUpBuyedProducts/>

                    <CartPopUpTotalPrice/>

                    <div className={css.button__wrapper}>
                        <div className={css.button__inner}>
                            <OpenPopUpButton
                                handler = {this.handleCLick}
                                text={"Process to payment"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
