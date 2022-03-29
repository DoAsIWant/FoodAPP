import React from "react";
import cross from "../../img/Vector 4.svg";
import context from "../../context/PopUpContext/context";
import css from "./CloseHiddenMenuButton.module.css"
export default class CloseHiddenMenuButton extends React.Component{
    static contextType = context

    render(){
        return(
            <div className={css.menu__cross}>
                <div className={css.cross} onClick={() => {
                    this.context.closePopUp()
                }}>
                    <img src={cross}/>
                </div>
            </div>
        )
    }
}