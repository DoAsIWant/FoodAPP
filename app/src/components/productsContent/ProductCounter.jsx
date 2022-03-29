import css from "./ProductsContent.module.css";
import React from "react";

export default class ProductCounter extends React.Component{

    render(){

        return(
            <div className={css.counter_container}>
                <div className={css.product_counter}>
                    <button onClick={this.props.decrement} id="minus">
                        -
                    </button>

                    <div className={css.counter_number}>
                        {this.props.countProduct}
                    </div>

                    <button onClick={this.props.increment} id="plus">
                        +
                    </button>
                </div>
            </div>
        )
    }
}