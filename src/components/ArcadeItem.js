import CareScale from "./CareScale"


var ArcadeItem = (props) =>{
    var name = props.name
    var cover = props.cover
    var id = props.id
    var power = props.power
    var intensity = props.intensity



    return <>
            nom :{name}
            <img src={cover} onClick={() => handleClick(name)}></img>
            power : <CareScale careType="power" scaleValue={power}/>
            intensité : <CareScale careType="intensity" scaleValue={intensity}/>
            </>

function handleClick(arcadeName){
    alert(`Vous voulez acheter 1 ${arcadeName} ? Très bon choix 🌱✨`)
    console.log("heyyyyy!",arcadeName)
}
    
}


export default ArcadeItem