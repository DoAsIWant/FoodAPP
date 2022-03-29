import React from "react";
import css from "../../pages/Products/Products.module.css";
import basketContext from "../../context/basketContext/context";
import ProductButtonContainer from "./ProductButtonContainer";
import ProductsCounterToCart from "./ProductsCounterToCart";
import ProductsDescription from "./ProductsDescription";
import TopingsContainer from "../topingsContainer/TopingsContainer";

export default class ProductsContent extends React.Component{
    static contextType = basketContext

    handleButtonClick = ()=>{
        const {product} = this.props;
        const {countProduct} = this.state
        this.context.addToBasket(product,countProduct)
    }

    state = {
        countProduct: 0
    }

    increment = ()=>{
        let {countProduct} = this.state
        this.setState({
            countProduct: countProduct + 1
        })
    }

    decrement = ()=>{
        let {countProduct} = this.state

        if(countProduct>0){
            this.setState({
                countProduct: countProduct - 1
            })
        }

    }

    render() {
        const {countProduct} = this.state
        const {product} = this.props

        return(
            <div className={css.content}>

                <ProductsCounterToCart
                    decrement={this.decrement}
                    increment={this.increment}
                    countProduct={countProduct}
                    product={product}
                />

                <ProductsDescription product={product}/>

                <TopingsContainer/>

                <ProductButtonContainer handler={this.handleButtonClick}/>
            </div>
        )
    }
}