var Monstera ="Monstera"    
var Lierre ="Lierre"    
var Bouquet ="Bouquets de fleurs"    
var PMon = 8;
var PLie = 10;
var PBouquet = 15;

let TotalPrice = () =>{
    return <div> {PMon+PLie+PBouquet} </div>
}


let Cart = () =>{
    return <div className="panier">
                <ul>
                    <li>{Monstera + " :"+PMon}</li>
                    <li>{Lierre + " :"+PLie}</li>
                    <li>{Bouquet + " :"+PBouquet}</li>
                    
                </ul>
                <h2>Prix total : <TotalPrice/></h2>
            </div> 
}
export default Cart 