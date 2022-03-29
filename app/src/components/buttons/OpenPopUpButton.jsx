import React from "react";
import css from "./OpenPopUpButton.module.css";


export default class OpenPopUpButton extends React.Component {

    render() {
        const {text,handler} = this.props;

        return (
            <div
                onClick={handler}
                className={css.button__caption}
            >
                <div className={css.caption__text}>
                    {text}
                </div>
            </div>
        )
    }
}
