import React from "react";
import css from "./DeliveryPayment.module.css";
import addPay from "../../img/addPay.png";
import masterCard from "../../img/mastercard.svg";
import paypal from "../../img/paypal.svg";
import stripe from "../../img/stripe.svg";

export default class DeliveryPayment extends React.Component{

    render(){
        return(
            <div className={css.payment}>
                <div className={css.payment__header}>
                    Payment
                </div>

                <div className={css.payment__img__container}>
                    <img className={css.plus__img} src={addPay}/>

                    <div className={css.item__wrap + " " + css.active}>
                        <div className={css.img__item}>
                            <img className={css.masterCard} src={masterCard}/>
                        </div>
                    </div>

                    <div className={css.item__wrap}>
                        <div className={css.img__item}>
                            <img className={css.paypal} src={paypal}/>
                        </div>

                    </div>

                    <div className={css.item__wrap}>
                        <div className={css.img__item}>
                            <img className={css.stripe} src={stripe}/>
                        </div>
                    </div>


                </div>

                <div className={css.pay__arrival}>
                    <div className={css.pay__arrival__container}>
                        <div className={css.radio__button}>
                            <input type="checkbox" id="pay"/>
                        </div>
                        <div className={css.arrival__caption}>
                            <label htmlFor="pay">Pay on arrival</label>
                        </div>
                    </div>
                </div>

                <div className={css.pay__cash}>
                    <div className={css.pay__cash__caption}>
                        Pay with cash/POS upon arrival
                    </div>
                </div>
            </div>
        )
    }
}