import React from "react";
import css from "./Payment.module.css";
import context from "../../context/orderContext/context"

export default class PaymentFields extends React.Component{
    static contextType = context

    render(){
        const {isCard,isCvv} = this.context.activeFields
        const {card,cvv} = this.context.inputsValues

        return(
            <div className={css.card__data__container}>
                <div className={css.card__details}>
                    <label htmlFor="details">Card details</label>

                    <input
                        className={isCard === false ? css.input__active : ""}
                        id="details"
                        placeholder="Enter card details"
                        value={card}
                        onChange={(e)=>{this.context.onChangeFields(e.target.value,"card")}}
                    />
                </div>

                <div className={css.card__data}>
                    <div className={css.card__month}>
                        <label htmlFor="month">Exp date</label>

                        <input
                            id="month"
                            type="number"
                            placeholder="DD/MM"
                        />
                    </div>

                    <div className={css.card__cv}>
                        <label htmlFor="cv">CVV</label>

                        <input
                            type="number"
                            id="cv"
                            placeholder="Enter CVV"
                            value={cvv}
                            onChange={(e)=>{this.context.onChangeFields(e.target.value,"cvv")}}
                            className={isCvv === false ? css.input__active : ""}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
