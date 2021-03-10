var CareScale = (props) =>{
    const scaleValue = props.scaleValue
    const range = [1,2,3]
    const emoji = props.careType === "power" ? "☀️" : "🏯"
    var message
    const quantityLabel = {
        1: "peu",
        2: "moyen",
        3: "beaucoup"
    }
    
    // return <div onClick={props.careType === "power" ? () => requierePower() : () => requireIntensity}>
    return <div onClick={() => whatRange()}>
                {
                    range.map((rangeElem)=>
                        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{emoji}</span> : null
                    )
                }
        </div>

function requierePower(){

    if(scaleValue === 1){
        message = "peu de power"
    }else if(scaleValue === 2){
        message = "moyen power"
    }else{
        message = "Beaucoup de pooooower !"
    }
    alert(message)
}
function requireIntensity(){

    if(scaleValue === 1){
        message = "peu d'intensity"
    }else if(scaleValue === 2){
        message = "moyen intensity"
    }else{
        message = "Beaucoup d'intensity !"
    }
    alert(message)
}
function whatRange(){
    // if(props.careType === "power"){
    //    requierePower()
    // }else{
    //    requireIntensity()
    // }
    alert(`Cette borne requiert ${quantityLabel[scaleValue]}
     ${props.careType === "power" ? "de puissance" : "d'intensité !"}`)
    // props.careType === "power" ? requierePower() : requireIntensity()
    
}

}
// function CareScale(props) {
//     var scaleValue = props.scaleValue
//     var cu = 3
//     return <div> {scaleValue} ☀️</div>
// }
    
export default CareScale