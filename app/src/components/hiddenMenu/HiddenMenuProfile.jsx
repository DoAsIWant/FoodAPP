import React from "react"
import context from "../../context/UserContext/context";
import CloseHiddenMenuButton from "../buttons/CloseHiddenMenuButton";
import css from "./HiddenMenuProfile.module.css"

export default class HiddenMenuProfile extends React.Component {
    static contextType = context

    render() {
        return (
            <>
               <CloseHiddenMenuButton/>

                <div className={css.menu__header}>
                    <div className={css.icon}>
                        <img src={this.context.userImg}/>
                    </div>

                    <div className={css.menu__description}>
                        <div className={css.description__header}>
                            <h2>{this.context.userName}</h2>
                        </div>

                        <div className={css.description__email}>
                            {this.context.userEmail}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
