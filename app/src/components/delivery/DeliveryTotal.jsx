import React from "react";
import css from "./DeliveryTotal.module.css";

export default class DeliveryTotal extends React.Component{
    render() {
        return(
            <div className={css.price__block}>
                <div className={css.price__total}>
                    <div className={css.total__caption}>
                        Delivery Fee
                    </div>

                    <div className={css.total__price}>
                        $20
                    </div>
                </div>

                <div className={css.price__total}>
                    <div className={css.total__caption}>
                        Subtotal
                    </div>

                    <div className={css.total__price}>
                        $520
                    </div>
                </div>

                <div className={css.final__total}>
                    <div className={css.total__caption}>
                        Total
                    </div>

                    <div className={css.final__price}>
                        $540
                    </div>
                </div>

            </div>
        )
    }
}