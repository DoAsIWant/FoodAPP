import React from "react";
import css from "./CartPopUpBuyedProducts.module.css";
import context from "../../context/basketContext/context";
import CartProduct from "./CartProduct";;

export default class CartPopUpBuyedProducts extends React.Component{

    static contextType = context

    render(){
        const {cart,increment,decrement} = this.context

        return (
            <div className={css.card__wrapper}>
                {cart.map(cartProduct=>{
                    return <CartProduct
                        increment={increment}
                        decrement={decrement}
                        product = {cartProduct}
                    />
                })}
            </div>
        )
    }
}