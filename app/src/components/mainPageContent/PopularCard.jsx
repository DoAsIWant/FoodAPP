import React from "react"
import css from "./PopularCard.module.css";
import {Link} from "react-router-dom";
import CardsImage from "./CardsImage";
import CardDescription from "./CardDescription";
import CardRating from "./CardRating";
import heartCard from "../../img/HeartCard.svg";
import cardData from "../../dataServices/Data";


export default class PopularCard extends React.Component{

    addActiveElement = ()=>{
        const {activeElIndex,index, refi,handleElem} = this.props

        if(activeElIndex === index){
            handleElem(refi.current)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.activeSection!==this.props.activeSection){
           this.addActiveElement()
        }
    }

    render(){
        const {item} = this.props

        return(

            <div ref={this.props.refi}
                 className={css.card__wrapper}
            >
                <Link to={`/products/${cardData.getSlug(item)}`}>
                    <div className={css.restaurant_card}>
                        <CardsImage img={cardData.getImage(item)}/>

                        <CardDescription
                            title={cardData.getNameTitle(item)}
                            description={cardData.getDescription(item)}
                        />

                        <CardRating
                            rating={cardData.getRating(item)}
                            heart={heartCard}
                        />
                    </div>
                </Link>
            </div>
        )
    }
}
