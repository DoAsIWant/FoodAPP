import React from "react"
import css from "./CartRating.module.css";
import star from "../../img/Star 1.png";

export default function CardRating({rating, heart}){
    return(
        <div className={css.card_footer}>
            <div className={css.card_footer_star}>
                <img src={star}/>
                <span>{rating}+</span>
            </div>

            <div className={css.card__footer_stroke}>
                <img src={heart}/>
            </div>
        </div>
    )
}