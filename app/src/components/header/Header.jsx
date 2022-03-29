import React from "react";
import css from "./Header.module.css";

import vector2 from "../../img/Vector 2.svg"
import user from "../../img/image 2.png"
import userContext from "../../context/UserContext/context";
import HeaderToogleButtonPopUp from "../buttons/HeaderToogleButtonPopUp";

export default class Header extends React.Component {
    static contextType = userContext;

    render() {
        return (
            <header className={css.header}>
                <div className={css.header_container}>
                    <HeaderToogleButtonPopUp/>

                    <div className={css.menu_description}>
                        <div className={css.delivery__container}>
                            <div className={css.delivery__to}>
                                Delivery to
                            </div>

                            <img src={vector2}/>
                        </div>

                        <p>
                            {this.context.deliveryTo}
                        </p>
                    </div>

                    <div className={css.menu_user}>
                        <div>
                            <img src={user}/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
