import React from "react";
import css from "./ProductsContent.module.css";
import cardData from "../../dataServices/Data";

export default function ProductCardImage({product}){
    return (
        <div className={css.example_container}>
            <div className={css.product_example}>
                <div className={css.product_example__wrapp}>
                    <img src={cardData.getImage(product)}/>
                </div>
            </div>
        </div>
    )
}