let Recommendation = () =>{
    var april = new Date().getMonth(3)
    var thisMonth = new Date().getMonth()
    if(thisMonth === april){
        return <div>Oui, c'est le mois de mon anniversaire !!</div>
    }
    return <div>Nope, ce n'est pas mon annif. Mais bon, tu fais ce que tu veux</div>
}

export default Recommendation
