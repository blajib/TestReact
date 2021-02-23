import AracdeList from "../components/ArcadeList"
const list = [
    "New Astro",
    "Astro",
    "Dance Dance Revolution",
    "Time Crisis",
    "Neo Geo"
]
function ShoppingList() {
    return (
        <ul>
            {list.map((borne, index) => (
                <li key={`${borne}-${index}`}>{borne}</li>
            ))}
        </ul>
    )
}

export default ShoppingList