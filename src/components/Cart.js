import newAstroCityImage from "../assets/images/sega-new-astro-city.jpg"
import astroCityImage from "../assets/images/astroCity.jpg"
import ddrImage from "../assets/images/ddr.jpg"


import "./styles/Cart.css"

var astroCity ="Astro City"    
var newAstroCity ="New Astro City"    
var dDR ="Dance Dance Revolution"    
var priceAC = 999;
var priceNAC = 1500;
var priceDDR = 1600;

let TotalPrice = () =>{
    return <div> {priceAC+priceNAC+priceDDR} </div>
}


let Cart = () =>{
    return <>
                {/* <div className="panier">
                <ul>
                    <li>{astroCity + " :"+priceAC}</li><img src={newAstroCityImage}></img>
                    <li>{newAstroCity + " :"+priceNAC}</li><img src={astroCityImage}></img>
                    <li>{dDR + " :"+priceDDR}</li><img src={ddrImage}></img>
                    
                </ul>
                
            </div>  */}
            <div className="panier">
                <div className="item">
                    <img src={newAstroCityImage}></img>
                    <h3>{newAstroCity}</h3>
                    <p>Prix : {priceNAC} $</p>
                </div >
                <div className="item">
                <img src={astroCityImage}></img>
                    <h3>{astroCity}</h3>
                    <p>Prix : {priceAC} $</p>
                </div>
                <div className="item">
                <img src={ddrImage}></img>
                    <h3>{dDR}</h3>
                    <p>Prix : {priceDDR} $</p>
                </div>
            </div>

            </>
}
export default Cart 