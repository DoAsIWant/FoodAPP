import React from "react"
import context from "./context";
import vector from "../../img/image 2.svg"

export default class UserContext extends React.Component {
    state = {
        username: "Marvis Ighedosa",
        email: "dosamarvis@gmail.com",
        userImg: vector,
        deliveryTo: "lekki phase 1, Estate"
    }

    render() {
        const {children} = this.props

        return (
            <context.Provider value={{
                userName: this.state.username,
                userEmail: this.state.email,
                userImg: this.state.userImg,
                deliveryTo: this.state.deliveryTo,
            }}>
                {children}
            </context.Provider>
        )
    }
}
