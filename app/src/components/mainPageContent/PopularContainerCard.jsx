import React, {createRef} from "react"
import PopularCard from "./PopularCard";
import context from "../../context/apiContext/context";

export default class PopularContainerCard extends React.Component {
    static contextType = context

    ref = createRef()

    generateRef = (section)=>{
        section = createRef()
        return section
    }

    render() {
        const {productsData} = this.context

        const activeElIndex = productsData.findIndex(
            (index) => {
                return this.props.activeSection === index.section[0]
            }
        )

        return productsData.map((el,i) => {
            return (
                <PopularCard
                    refi={this.generateRef(el.section)}
                    activeSection={this.props.activeSection}
                    activeElIndex={activeElIndex}
                    handleElem={this.props.handleElem}
                    item={el}
                    key={i}
                    index={i}
                />
            )
        })
    }
}
