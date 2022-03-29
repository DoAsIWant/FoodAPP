import React from "react";
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Products from "./pages/Products/Products";
import {PopUpContext} from "./context/PopUpContext/PopUpContext";
import UserContext from "./context/UserContext/UserContext";
import {OrderContextProvider} from "./context/orderContext/OrderContextProvider";
import ApiContext from "./context/apiContext/ApiContext";
import BasketContext from "./context/basketContext/BasketContext";


export default function App(props) {
    const {newData: [products, sections]} = props

    return (
        <ApiContext product={products} sections={sections}>
            <BasketContext>
                <UserContext>
                    <OrderContextProvider>
                        <PopUpContext>
                            <BrowserRouter>
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        component={MainPage}
                                    />
                                    <Route
                                        exact
                                        path="/products/:slug"
                                        component={Products}
                                    />
                                </Switch>
                            </BrowserRouter>
                        </PopUpContext>
                    </OrderContextProvider>
                </UserContext>
            </BasketContext>
        </ApiContext>
    );
}

