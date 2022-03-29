import React from "react";
import css from "./Footer.module.css";
import search from "../../img/Search.svg"
import home from "../../img/Home.svg";
import heart from "../../img/Heart.svg"
import notifications from "../../img/Notification.svg";
import buy from "../../img/Buy.svg";

export default function Footer(){
    return (
        <div className={css.menu_container}>
            <div className={css.outer_orange}>
                <div className={css.outer_orange_inner}>
                    <div className={css.orange}>
                        <a href="#"><img  src={search}/></a>
                    </div>
                </div>
            </div>

            <div className={css.menu__wrap}>
                <div className={css.footer_icon}>
                    <a href="#"><img style={{fill:"#ffff"}} src={home}/></a>
                </div>

                <div className={css.footer_icon}>
                    <a href="#"><img src={heart}/></a>
                </div>

                <div className={css.empty_icon_space}/>

                <div className={css.footer_icon}>
                    <a href="#"><img src={notifications}/></a>
                </div>

                <div className={css.footer_icon}>
                    <a href="#"> <img src={buy}/></a>
                </div>
            </div>
        </div>
    )
}