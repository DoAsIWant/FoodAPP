import React from "react"
import css from "./DescriptionText.module.css";
import cardData from "../../dataServices/Data";

export default class DescriptionText extends React.Component{

    state = {
        active: false,
    }

    onShowText = ()=>{
        this.setState({
            active: !this.state.active
        })
    }

    sliceText = (str)=>{
        let slicedStr = str.slice(0,153)
        let restStr = str.slice(153, str.length - 1)

        return {
            slicedStr,
            restStr,
        }
    }

    render(){
        const {active} = this.state
        const {product} = this.props

        return(
            <div className={css.name_descriptions + " " + (active ? css.desc__active : "")}>
                <span>
                    {this.sliceText(cardData.getDescription(product)).slicedStr}

                    <div
                        onClick={this.onShowText}
                        className={css.more}
                    >
                        &#160; more
                    </div>
                </span>

                <br/>

                <span className={css.show__text}>
                    {this.sliceText(cardData.getDescription(product)).restStr}
                    <div
                        onClick={this.onShowText}
                        className={css.less}
                    >
                        &#160; less
                    </div>

                </span>
            </div>
        )
    }
}