var CareScale = (props) =>{
    const scaleValue = props.scaleValue
    const range = [1,2,3]
    const emoji = props.careType === "power" ? "☀️" : "🏯"
    
    return <div>
                {
                    range.map((rangeElem)=>
                        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{emoji}</span> : null
                    )
                }
        </div>


}
// function CareScale(props) {
//     var scaleValue = props.scaleValue
//     var cu = 3
//     return <div> {scaleValue} ☀️</div>
// }
    
export default CareScale