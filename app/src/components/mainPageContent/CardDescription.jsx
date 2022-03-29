import React from "react"
import css from "./CardDescription.module.css";

export default function CardDescription({title,description}){
    return(
        <div className={css.card_content}>
            <div className={css.card__header}>
                <h3>{title}</h3>
            </div>

            <div className={css.card__food__caption}>
                {description}
            </div>
        </div>
    )
}