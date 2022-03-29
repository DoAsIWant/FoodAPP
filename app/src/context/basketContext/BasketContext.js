import React from "react"
import context from "./context";

class BasketContext extends React.Component{

    state = {
        cart : [],
        saum:0
    }


    addToBasket = (orderedProduct,productCount)=>{
        let findProduct = this.state.cart.find(el=>el.slug === orderedProduct.slug)

        if (!findProduct){
            orderedProduct.count = productCount;
            this.setState({cart:[orderedProduct, ...this.state.cart]})
        }
    }

    incrementProduct = (slug)=>{
        let findProduct = this.state.cart.find(el=>el.slug === slug)
        findProduct.count++
        this.setState({cart:[...this.state.cart]})
    }

    decrementProduct = (slug)=>{
        let findProduct = this.state.cart.find(el=>el.slug === slug)

        if(findProduct.count > 1){
            findProduct.count--
        }
        this.setState({cart:[...this.state.cart]})
    }


    render(){
        return <context.Provider value={{
            cart: this.state.cart,
            addToBasket: this.addToBasket,
            increment: this.incrementProduct,
            decrement: this.decrementProduct,
        }}>
            {this.props.children}
        </context.Provider>
    }
}

export default BasketContext