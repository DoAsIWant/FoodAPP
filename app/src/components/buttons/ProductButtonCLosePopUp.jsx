import React from "react"
import {Link} from "react-router-dom";
import css from "../header/Header.module.css";
import group from "../../img/Vector 3.svg";
import context from "../../context/PopUpContext/context";

export default class ProductButtonCLosePopUp extends React.Component{
    static contextType = context

    getLink() {
        if (!this.context.state.popup) {
            return (
                <Link to="/">
                    <div className={css.menu_button}>
                        <img src={group}/>
                    </div>
                </Link>
            )
        }

        return (
            <div
                onClick={() => {
                    this.context.closePopUp()
                }}
            >
                <div className={css.menu_button}>
                    <img src={group}/>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.getLink()
        )
    }
}