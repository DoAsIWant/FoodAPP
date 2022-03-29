import React from "react";
import css from "./DeliveryMethod.module.css";

export default class DeliveryMethod extends React.Component{
    render(){
        return(
            <div className={css.delivery}>
                <div className={css.delivery__header}>
                    Delivery method
                </div>

                <div className={css.delivery__data__container}>
                    <div className={css.data__item}>
                        <div className={css.item__description}>
                            137 Teaticket Hwy, East Falmouth MA 2536
                        </div>

                        <div className={css.item__change}>
                            <div className={css.change}>Change</div>
                        </div>
                    </div>

                    <div className={css.data__item}>
                        <div className={css.item__description}>
                            +234 9011039271
                        </div>

                        <div className={css.item__change}>
                            <div className={css.change}>Change</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}