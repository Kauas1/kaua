import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
// BrowserRouter deve ser o componente que envolve tudo que depende do react-router
// Routes defien as áreas em que vamos colocar os nossos route 
// Route recebe o caminho em path. Se esse caminho for o mesmo do URL ele irá renderizar
const App = () =>{

  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/sobre' element ={<Sobre/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;