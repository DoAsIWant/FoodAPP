import React from "react";
import css from "./Success.module.css"
import successImg from "../../img/success.svg"
import context from "../../context/PopUpContext/context";
import OpenPopUpButton from "../buttons/OpenPopUpButton";

export default class Success extends React.Component{
    static contextType = context

    handleClick = () =>{
        this.context.closePopUp()
    }

    render(){
        return(
            <div className={css.success__content}>

                <div className={css.success__message}>
                    <div className={css.message__img}>
                        <img src={successImg}/>
                    </div>

                    <div className={css.message__header}>
                        Your order has been successfully placed
                    </div>

                    <div className={css.message__text}>
                        Sit and relax while your orders is being worked on . It’ll take 5min before you get it
                    </div>
                </div>


                <div className={css.proceed__container}>
                    <div className={css.proceed__button}>
                        <OpenPopUpButton handler={this.handleClick} text={"Go back to home"}/>
                    </div>
                </div>

            </div>
    )
    }
}