import React from "react";
import context from "./context";


class OrderContextProvider extends React.Component{

    fields = {
        card: "",
        date: "",
        cvv: "",
    }

    active = {
        isCard: "",
        isCvv: "",
    }

    state = {
        fields: this.fields,
        active: this.active
    }


    onChangeFields = (changedField,onfield)=>{
        this.fields[onfield] = changedField

        this.setState({
            fields: this.state.fields
        })
    }

    validateInput = ()=>{
        let isCard = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/.test(this.state.fields.card)

        let isCvv = /\d{3}/.test(this.state.fields.cvv);

        this.setState({
            active: {
                isCard,
                isCvv,
            }
        })
        if ((isCard === true) && (isCvv === true)){
            return true
        }

    }

    render(){
        return(
            <context.Provider value={{
                onChangeFields: this.onChangeFields,
                inputsValues : this.state.fields,
                activeFields : this.state.active,
                validateInputs: this.validateInput,
            }}>
                {this.props.children}

            </context.Provider>
        )
    }
}
const PopUpConsumer = context.Consumer
export {PopUpConsumer, OrderContextProvider}