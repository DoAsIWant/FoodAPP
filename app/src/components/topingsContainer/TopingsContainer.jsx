import React from "react";
import toppingFirst from "../../img/topping_first.svg";
import toppingThird from "../../img/topping_third.svg";
import toppingSecond from "../../img/topping_second.svg";
import css from "./TopingContainer.module.css"

export default class TopingsContainer extends React.Component {
    render() {
        return (
            <div className={css.topings__container}>
                <div className={css.topings__header}>Toppings for you</div>
                <div className={css.topping__wrapper}>
                    <div className={css.topping__container}>
                        <div className={css.topings__buttons}>
                            <div className={css.toping}>
                                <div className={css.topping__img}>
                                    <img src={toppingFirst}/>
                                </div>

                                <div className={css.topping__caption}>
                                    Regular Bun
                                </div>
                            </div>
                        </div>

                        <div className={css.topings__buttons}>
                            <div className={css.toping}>
                                <div className={css.topping__img}>
                                    <img src={toppingThird}/>
                                </div>

                                <div className={css.topping__caption}>
                                    Chesee
                                </div>
                            </div>
                        </div>

                        <div className={css.topings__buttons}>
                            <div className={css.toping}>
                                <div className={css.topping__img}>
                                    <img src={toppingSecond}/>
                                </div>

                                <div className={css.topping__caption}>
                                    Chesee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
