import { useState } from 'react'


// var QuestionForm = () =>{
//   return <form onSubmit={handleSubmit}>
//     <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//     <button type='submit'>Entrer</button>
// </form>
// }
// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm