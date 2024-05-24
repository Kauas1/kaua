import React from "react"

const App = () =>{

    const [cep, setCep] = React.useState('')
    const [error, setError] = React.useState(null)

    function validaCep(value){
        if(value.length === 0){
            setError("O campo não pode está vazio!")
            return false
        }else if(!/\d{5}-\d{3}/.test(value)){
            setError("Digite um CEP válido!")
        }else{
            setError(null)
            return true
        }
    }

    function handleBlur({target}){
        validaCep(target.value)
    }

    return(
        <form>
            <label htmlFor="cep">CEP</label>
            <input type="text" 
                    id="cep"
                    value={cep}
                    onBlur={handleBlur}
                    onChange={({target})=> setCep(target.value)}/>
                    {error && <p>{error}</p>}
                    <button>Enviar</button>
        </form>
    )
}

export default App;