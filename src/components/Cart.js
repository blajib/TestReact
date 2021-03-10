import newAstroCityImage from "../assets/images/sega-new-astro-city.jpg"
import astroCityImage from "../assets/images/astroCity.jpg"
import ddrImage from "../assets/images/ddr.jpg"
import {useState} from 'react'
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
    const [cart,updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return <div className="marche">
                {isOpen ?(
                    <>
                        <div className="panier">
                            <h3>Total : {priceAC * cart}€</h3>
                        </div>
                        <button onClick={() => viderPanier()}>Vider panier</button>
                    </>    
                ) : (<button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>)}
                <div className="articles">
                    <div className="item">
                        <img src={astroCityImage}></img>
                        <h2>astroCity</h2>
                        <h2>Price : {priceAC}</h2>
                        <button onClick={() => ajouter()}>Ajouter</button>
                    </div>
                    <div className="item">
                        <img src={newAstroCityImage}></img>
                        <h2>newAstroCity</h2>
                        <h2>Price : {newAstroCity}</h2>
                        <button onClick={() => ajouter()}>Ajouter</button>
                    </div>
                    <div className="item">
                        <img src={ddrImage}></img>
                        <h2>DDR</h2>
                        <h2>Price : {priceDDR}</h2>
                        <button onClick={() => ajouter()}>Ajouter</button>
                    </div>
                </div>
            </div>

                function viderPanier() {
                    setIsOpen(false)
                    updateCart(cart === 0)
                    
                }
                function ajouter(){
                    updateCart(cart + 1)
                    setIsOpen(true)
                }
            
}
export default Cart 