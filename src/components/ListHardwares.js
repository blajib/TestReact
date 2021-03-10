import newAstroCityImage from "../assets/images/sega-new-astro-city.jpg"
import astroCityImage from "../assets/images/astroCity.jpg"
import ddrImage from "../assets/images/ddr.jpg"


let listHardwares =  [
        {
            name : "new astro",
            category : "classique",
            id : 1,
            isBestSale: true,
            solded : true,
            power: 3,
            intensity: 3,
            cover: newAstroCityImage
        },
        {
            name : "astro",
            category : "classique",
            id : 2,
            isBestSale: false,
            solded : false,
            power: 1,
            intensity: 2,
            cover: astroCityImage
        },
        {
            name : "DDR",
            category : "classique",
            id : 3,
            isBestSale: true,
            solded : false,
            power: 2,
            intensity: 3,
            cover: ddrImage
        },
        {
            name : "NeoGeo",
            category : "classique",
            id : 4,
            isBestSale: false,
            solded: false,
            power: 3,
            intensity:1,
            cover:null           
        }
    ]
    

export default listHardwares