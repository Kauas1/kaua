import Container  from "../src/Container/Container";
import Button from "../src/Button/Button";
import Logo from "../src/Logo/Logo"
import Submit from "./Submit/Submit";
import './App.css'
const App = () => {
 return(
  <> 
  <div className="container">
  <Logo/>
  <Container/>
  <Button borda={50}/>
  <Submit />
  </div>
  </>
 )

}

export default App;