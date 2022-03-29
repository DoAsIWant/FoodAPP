import React from "react";
import css from "./ProductsCounterToCart.module.css";
import ProductCardImage from "./ProductCardImage";
import ProductCounter from "./ProductCounter";

export default class ProductsCounterToCart extends React.Component {
    render() {
        const {product,countProduct,increment,decrement} = this.props

        return (
            <section className={css.products}>
               <ProductCardImage product={product}/>

                <ProductCounter
                    decrement={decrement}
                    increment={increment}
                    countProduct={countProduct}
                />
            </section>
        )
    }
}
