import React from "react";
import profile from "../../img/Profile.png";
import work from "../../img/Work.png";
import settings from "../../img/Setting.png";
import chat from "../../img/Chat.png";
import paper from "../../img/Paper.png";
import css from "./HiddenMenuData.module.css"

export default class HiddenMenuData extends React.Component {

    render(){
        return(
            <div className={css.menu__wrapper}>
                <div className={css.menu__card +  " " + css.profile}>
                    <div className={css.card__img}>
                        <img src={profile}/>
                    </div>
                    <div className={css.card__caption}>
                        <div>
                            My Profile
                        </div>
                    </div>
                </div>

                <div className={css.menu__card}>
                    <div className={css.card__img}>
                        <img src={work}/>
                    </div>
                    <div className={css.card__caption}>
                        <div>
                            Payment method
                        </div>
                    </div>
                </div>

                <div className={css.menu__card}>
                    <div className={css.card__img}>
                        <img src={settings}/>
                    </div>
                    <div className={css.card__caption}>
                        <div>
                            Settings
                        </div>
                    </div>
                </div>

                <div className={css.menu__card}>
                    <div className={css.card__img}>
                        <img src={chat}/>
                    </div>
                    <div className={css.card__caption}>
                        <div>Help</div>
                    </div>
                </div>

                <div className={css.menu__card}>
                    <div className={css.card__img}>
                        <img src={paper}/>
                    </div>
                    <div className={css.card__caption}>
                        <div>
                            Privacy policy
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}