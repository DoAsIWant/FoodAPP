import React from "react"
import css from "./PopularContainer.module.css";
import PopularContainerCard from "./PopularContainerCard";

export default class PopularContainer extends React.Component {
    ref = React.createRef()

    state = {
        el: 0
    }

    handleElem = (el)=>{
        this.setState({
            el: el
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.el !== this.state.el){
            this.ref.current.scrollTo({
                left: this.state.el.offsetLeft - 10,
                behavior: "smooth"
            })
        }
    }

    render() {
        return (
            <section className={css.popular_restaurants}>
                <div className={css.restaurant_container}>
                    <h2>
                        Popular restaurants
                    </h2>

                    <div className={css.all}>
                        View all(29)
                    </div>
                </div>

                <div ref={this.ref} className={css.restaurant_card__container}>
                    <PopularContainerCard
                        handleElem = {this.handleElem}
                        activeSection={this.props.activeSection}
                    />
                </div>
            </section>
        )
    }
}
