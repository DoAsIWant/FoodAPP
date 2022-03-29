import React from "react"
import css from "./Payment.module.css"
import context from "../../context/orderContext/context"
import PaymentFields from "./PaymentFields";
import PaymentButtonContainer from "./PaymentButtonContainer";

export default class Payment extends React.Component {
    static contextType = context;

    render() {
        return (
            <div className={css.payment__content}>
                <div className={css.payment__data}>
                    <div className={css.pay__header}>
                        Payment
                    </div>


                    <PaymentFields/>
                </div>

                <PaymentButtonContainer isValidate={this.context.validateInputs}/>
            </div>
        )
    }
}
