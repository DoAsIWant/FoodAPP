import React from "react";
import css from "../header/Header.module.css";
import vector2 from "../../img/Vector 2.svg";
import user from "../../img/image 2.png";
import ProductButtonCLosePopUp from "../buttons/ProductButtonCLosePopUp";
import context from "../../context/UserContext/context";


export default class ProductsHeader extends React.Component {
    static contextType = context

    render() {
        return (
            <header className={css.header}>
                <div className={css.header_container}>

                    <ProductButtonCLosePopUp/>

                    <div className={css.menu_description}>
                        <div className={css.delivery__container}>
                            <div className={css.delivery__to}>Delivery to </div>
                            <img src={vector2}/>
                        </div>
                        <p>{this.context.deliveryTo}</p>
                    </div>

                    <div className={css.menu_user}>
                        <div className={css.user}>
                            <img src={user}/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

