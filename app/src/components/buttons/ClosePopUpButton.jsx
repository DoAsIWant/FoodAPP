import React from "react"
import css from "./ClosePopUpButton.module.css";
import vector from "../../img/Vector 36.png"

export default class ClosePopUpButton extends React.Component{
    render(){
        return(
            <div onClick={this.props.handler} className={css.menu__button}>
                <div className={css.popup__button}><img src={vector}/></div>
            </div>
        )
    }
}