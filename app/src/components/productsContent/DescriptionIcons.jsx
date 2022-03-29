import React from "react"
import css from "./DescriptionIcons.module.css";
import cardData from "../../dataServices/Data";
import star from "../../img/star.png";
import fire from "../../img/fire.svg";
import clock from "../../img/clock.svg";

export default class DescriptionIcons extends React.Component {

    drawHeart = (star)=>{
        let starCount = Math.ceil(parseInt(star))
        let arrayStars = [];

        for(let i = 0; i<starCount; i++){
            arrayStars.push(i)
        }

        return arrayStars
    }

    render() {
        const {product} = this.props

        return(
            <div className={css.name_icons}>
                <div className={css.icon__group}>
                    {
                        this.drawHeart(cardData.getRating(product)).map((el)=>{
                            return <img key={el} src={star} />
                        })
                    }
                </div>

                <div className={css.icon__group}>
                    <img src={fire} alt=""/>
                    <span>{cardData.getCalories(product) + "kal"}</span>
                </div>

                <div className={css.icon__group}>
                    <img src={clock} alt=""/>
                    <span>{cardData.getTime(product) + "min"}</span>
                </div>
            </div>
        )
    }

}

