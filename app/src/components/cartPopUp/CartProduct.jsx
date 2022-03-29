import React from "react"
import css from "./CartPopUpBuyedProducts.module.css";
import edit from "../../img/Edit.svg";
import deleteb from "../../img/Delete.svg";
import cardData from "../../dataServices/Data";


export default class CartProduct extends React.Component{
    render() {
        const {product,increment,decrement} = this.props

        return(
            <div className={css.card__container}>
                <div className={css.card} id="firstCard">
                    <div className={css.card__inner}>
                        <div className={css.card__img}>
                            <img src={cardData.getImage(product)} alt=""/>
                        </div>

                        <div className={css.card__describe}>
                            <h3 className={css.describe__header}>
                                {cardData.getNameTitle(product)}
                            </h3>

                            <div className={css.describe__text}>
                                {cardData.getSectionName(product)}
                            </div>

                            <div className={css.describe__price}>
                                {cardData.getPrice(product) + "$"}
                            </div>
                        </div>

                        <div className={css.card__counter}>
                            <div onClick={()=>{decrement(product.slug)}} className={css.counter__button + " " + css.minus}>
                                -
                            </div>

                            <div className={css.counter__number}>
                                {product.count}
                            </div>

                            <div onClick={()=>{increment(product.slug)}} className={css.counter__button + " " + css.plus}>
                                +
                            </div>
                        </div>

                    </div>
                </div>

                <div className={css.card__buttons}>
                    <div className={css.edit}>
                        <img src={edit}/>
                    </div>

                    <div
                        onClick={this.context.removeFromBasket}
                         className={css.delete}
                    >

                        <img src={deleteb}/>
                    </div>
                </div>

            </div>
        )
    }
}