import React from "react"
import css from "../../pages/MainPage/MainPage.module.css";
import Header from "../header/Header";
import FoodCardContainer from "./FoodCardContainer";
import PopularContainer from "./PopularContainer";
import Footer from "../footer/Footer";
import context from "../../context/apiContext/context";

export default class MainPageContent extends React.Component{

    static contextType = context

    state = {
        activeSection: this.context.sectionsData[0].slug
    }

    OnchangeSection = (newSlug) =>{
        this.setState({
            activeSection: newSlug
        })
    }

    render(){
        const {activeSection} = this.state

       return (
           <div className={css.main__page}>

           <Header />

           <div className={css.content}>
               <div className={css.content__inner}>

                   <FoodCardContainer
                       onChangeSection = {this.OnchangeSection}
                       activeSection = {activeSection}
                   />

                   <PopularContainer activeSection={activeSection}/>
               </div>
           </div>

           <Footer/>
       </div>
       )
    }
}