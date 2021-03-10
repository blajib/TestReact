import { useState } from 'react'


function MailForm() {
    const [inputValue, setInputValue] = useState('Mettre mail')
    function checkIfMail(value){
        if (!value.includes('@')) {
            alert("Ceci n'est pas une adresse mail")
        }else{
            alert("Good mail bro")
        }
    }
    function checkIfMailBlur(value){
        if (!value.includes('@')) {
            alert("Ceci n'est pas une adresse mail")
        }
    }
    return (
        <div onBlur={() => checkIfMailBlur(inputValue)}>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                // onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => checkIfMail(inputValue)}>Submitt</button>
        </div>
    )
}

export default MailForm