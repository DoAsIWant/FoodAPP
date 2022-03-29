import React from "react"
import css from "./ProductDescription.module.css";
import context from "../../context/apiContext/context";
import DescriptionIcons from "./DescriptionIcons";
import DescriptionText from "./DescriptionText";
import cardData from "../../dataServices/Data";

export default class ProductsDescription extends React.Component{

    static contextType = context

    render(){
        const {product} = this.props

        return(
            <section className={css.products_types}>
                <div className={css.type__container}>
                    <h1 className={css.name_header}>
                        {cardData.getNameTitle(product)}
                    </h1>

                    <DescriptionIcons product={product}/>

                    <DescriptionText product={product}/>
                </div>
            </section>
        )
    }
}