import React from "react"
import context from "./context";

class ApiContext extends React.Component {
    state = {
        sections: this.props.sections,
        products: this.props.product,
    }

    getProductsBySlug = (slug) => {
        return this.state.products.find(el => el.slug === slug)
    }

    render() {
        const {products, sections} = this.state;
        const getProductsBySlug = this.getProductsBySlug

        return (
            <context.Provider value={{
                getProductsBySlug,
                productsData: products,
                sectionsData: sections,
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default ApiContext
