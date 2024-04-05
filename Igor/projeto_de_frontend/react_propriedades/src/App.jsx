
// Propriedades ou pr
const Titulo = (props) => {
    return(
        <h1 style={{color: props.cor}}>{props.texto}</h1>
    )
}

const SubTitulo = ({texto, cor}) => {
    return(
        <p style={{color: cor}}>{texto}</p>
    )
}

const Cabecalho = () =>{
    return(
        <h1>{props.children}</h1>
    )
}

const App = () => {
    return(
        <> 
        <Cabecelho>
            <p>Esse é o meu Cabecalho</p>
        </Cabecelho>
        <Titulo cor="blue" texto="Meu titulo"/>
        <SubTitulo texto="Esse é o subtitulo do meu primeiro título" cor="purple"/>
        <Titulo cor="green" texto="Esse é meu outro título"/>
        <Titulo cor="red" texto="Esse é o terceiro título"/>
        </>
    )
}

export default App;