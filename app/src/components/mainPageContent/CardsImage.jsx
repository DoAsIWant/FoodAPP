import React from "react"
import css from "./CardsImage.module.css";


export default function CardsImage({img}){
    return(
        <div className={css.card_img}>
            <img src={img} alt=""/>
        </div>
    )
}
