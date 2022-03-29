import React from "react";
import css from "./HiddenMenu.module.css";
import HiddenMenuProfile from "./HiddenMenuProfile";
import HiddenMenuData from "./HiddenMenuData";

export default class HiddenMenu extends React.Component {
    render() {
        return (
            <div className={css.hidden__menu}>
                <HiddenMenuProfile/>

                <HiddenMenuData/>

                <div className={css.menu__logout}>
                    <div className={css.logout}>
                        <div>Log Out</div>
                    </div>
                </div>
            </div>
        );
    }
}



