import mockImage from "../img/mockImage.png"

class Data {

    getImage(data) {
        if (!data){
            return mockImage
        }

        return ("http://localhost:8082/upload/" + data.image[0].url[0])
    }

    getNameTitle(data) {
        if(!data){
           return  "Lorem ipsum si amet"
        }

        return (data.property[0].value[0])
    }

    getCalories(data) {
        if(!data){
            return 0
        }

        return data.property[1].value[0]
    }

    getDescription(data) {
        if(!data){
            return  "Lorem ipsum si amet"
        }

        return data.property[3].value[0]
    }

    getTime(data) {
        if(!data){
            return 0
        }
        return data.property[2].value[0]
    }

    getPrice(data) {
        if(!data){
            return 0
        }

        return data.property[5].value[0]
    }

    getRating(data) {
        if(!data){
            return 0
        }

        return data.property[4].value[0]
    }

    getSectionName(data) {
        if(!data){
            return "Section"
        }

        return (data.property[0].value[0])
    }

    getSectionImage(data) {
        if (!data){
            return mockImage
        }

        console.log(data.image[0].url)

        return "http://localhost:8082/upload/" + data.image[0].url || mockImage
    }

    getSectionType(data) {
        if (!data) {
            return "Classical"
        }
        return data.property[1].value[0];
    }

    getSlug(data) {
        return data.slug
    }
}

const cardData = new Data();

export default cardData
