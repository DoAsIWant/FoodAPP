import React from "react"
import css from "./CartPopUpTotalPrice.module.css";

export default class CartPopUpTotalPrice extends React.Component{
    render(){
        return(
            <div className={css.total__container}>
                <div className={css.total}>
                    <div className={css.total_caption}>
                        Total
                    </div>
                    <div className={css.total__price}>
                        $345
                    </div>
                </div>
            </div>
        )
    }
}