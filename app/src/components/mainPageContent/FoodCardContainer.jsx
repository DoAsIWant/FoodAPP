import React from "react"
import css from "./FoodCardContainer.module.css"
import FoodCard from "./FoodCard";
import context from "../../context/apiContext/context";

export default class FoodCardContainer extends React.Component {
    static contextType = context

    renderItem(item) {
        const {onChangeSection,activeSection} = this.props

        let classname = (item.slug === activeSection)

        return (
            <FoodCard
                item={item}
                key={item.slug}
                className={classname}
                onchangeSection = {onChangeSection}
            />
        );
    }

    renderList() {
        const {sectionsData} = this.context;
        return sectionsData.map(this.renderItem, this)
    }

    render() {
        return (
            <section className={css.delicious_food}>
                <div className={css.delicious_food__header}>
                    <h1>Enjoy Delicious food</h1>
                </div>

                <div className={css.food__card__container}>
                    {this.renderList()}
                </div>
            </section>
        )
    }
}
