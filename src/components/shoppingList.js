import AracdeList from "../components/ArcadeList"
import ListHardwares from "./ListHardwares"
import ListCategory from "./ListCategory"
import "./styles/ShoppingList.css"
import CareScale from "./CareScale"


let ShoppingList = () => {
    return (
        <>
        <h2>Catégorie</h2>
        <ul>
            {ListCategory.map((categorie, index) => (
                <li key={`${categorie}-${index}`}>{categorie}</li>
            ))}            
        </ul>
        <h2>Hardware</h2>
        {/* <ul>
            {listHardware.map((borne, index) => (
                <li key={`${borne}-${index}`}>{borne}</li>
            ))}
        </ul> */}
        {/* <ul>
            {listHardware.map((borne) => (
                <li key={borne.id}>{borne.name} -&gt;   {borne.isBestSale?<span>Yeah !!</span> : <span>Nooo !</span>}</li>
            ))}
        </ul> */}
        <ul>

            {ListHardwares.map((borne) => (
                <li className={borne.solded && "baa-sales"} key={borne.id}>{borne.name} 
                    {borne.isBestSale && <span>-&gt;  Yeah !!</span>} 
                    {borne.solded && <span>Soldé en plus</span>}
                     power : <CareScale careType="power" scaleValue={borne.power}/>
                     intensité : <CareScale careType="intensity" scaleValue={borne.intensity}/>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ShoppingList