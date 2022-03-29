import React from "react";
import css from "./FoodCardContainer.module.css";
import cardData from "../../dataServices/Data"

export default class FoodCard extends React.Component {

    handler = ()=>{
        const {item,onchangeSection} = this.props;
        onchangeSection(item.slug)

    }

    getClassName = ()=>{
        if (this.props.className){
            return css.food_card + " " + css.active
        }
        return css.food_card
    }

    render() {
        const {item} = this.props

        return (
            <div onClick={this.handler}>
                <div className={this.getClassName()}>
                    <div className={css.food_card_inner}>

                        <div className={css.emoji}>
                            <img src={cardData.getSectionImage(item)}/>
                        </div>

                        <div className={css.caption}>
                            {cardData.getSectionName(item)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
