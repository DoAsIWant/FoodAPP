import React from "react";
import css from "./MainPage.module.css"
import "../../fonts/fonts.css"
import context from "../../context/PopUpContext/context";
import MainPageContent from "../../components/mainPageContent/MainPageContent";


export default class MainPage extends React.Component {
    static contextType = context

    getCls() {
        const {state: {popup}} = this.context;

        if (popup) {
            return css.main__border + " " + css.active__border;
        } else {
            return css.main__border
        }
    }

    render() {
        return (
            <div className={this.getCls()}>
                <MainPageContent/>
            </div>
        )
    }
}
