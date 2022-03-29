import React from "react";
import css from "../header/Header.module.css";
import {menu} from "../../context/PopUpContext/key";
import group from "../../img/Group 399.svg";
import context from "../../context/PopUpContext/context";

export default class HeaderToogleButtonPopUp extends React.Component{
    static contextType = context

    handleClick = () => {
        this.context.openPopUp(menu)
    }

    render() {
        return(
            <div
                className={css.menu_button}
                onClick={this.handleClick}
            >
                <img src={group}/>
            </div>
        )
    }
}