import React from "react"
import "../../fonts/fonts.css"
import ProductsHeader from "../../components/productHeader/ProductsHeader";
import Footer from "../../components/footer/Footer";
import context from "../../context/apiContext/context";
import {withRouter} from "react-router-dom";
import ProductsContent from "../../components/productsContent/ProductsContent";

class Products extends React.Component {
    static contextType = context;

    render() {

        const {slug} = this.props.match.params
        let product = this.context.getProductsBySlug(slug)

        return (
            <>
                <ProductsHeader/>

                <ProductsContent product={product}/>

                <Footer/>
            </>
        )
    }
}

export default withRouter(Products)
