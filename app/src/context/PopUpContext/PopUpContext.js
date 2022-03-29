import React from "react";
import {order, cart, menu} from "./key.js";
import context from "./context"
import Cart from "../../components/cartPopUp/Cart";
import HiddenMenu from "../../components/hiddenMenu/HiddenMenu";
import OrderPopUp from "../../components/orderPopUp/OrderPopUp";


class PopUpContext extends React.Component {
    state = {
        popup: null,
        type: null,
    };

    popUpList = {
        [order]: OrderPopUp,
        [cart]: Cart,
        [menu]: HiddenMenu
    }


    openPopUp = (popup,type) => {
        this.setState({
            popup,
            type,
        })
    }

    closePopUp = () => {
        this.setState({
            popup: null,
            params: null
        })
    }

    renderPopUp = () => {
        if (this.state.popup === null) {
            return null
        }
        const {popup,type} = this.state
        const PopUp = this.popUpList[popup];

        return (
            <PopUp type={type}/>
        )
    }


    render() {
        const {children} = this.props;

        return (
            <context.Provider value={{
                openPopUp: this.openPopUp,
                closePopUp: this.closePopUp,
                state: this.state,
            }}>
                {children}

                {this.renderPopUp()}
            </context.Provider>
        );
    }
}

const PopUpConsumer = context.Consumer

export {PopUpContext, PopUpConsumer};
