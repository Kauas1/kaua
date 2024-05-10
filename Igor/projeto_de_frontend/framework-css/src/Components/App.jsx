import {Titulo, Titulo2, Container, Titulo3, Container2, Container3} from '../Styles/App'
import './App.css'


const App = () =>{

  
  return(
    <> 
    <div> 
    <Container> 
    <Titulo className='principal-title'>Join our community</Titulo>
    <Titulo2 className='principal-subtitle'>30-day, hassie-free money back guarantee</Titulo2>
    <Titulo3 className='principal-p'>Gain access to our full library of tutorials along with expert code reviews.
    Perfect for any developers who are serious about honing their skills.
    </Titulo3>
    </Container>
    <div className="include">

    
    <Container2>
    <Titulo className='secundary-title'> Monthly Subscription</Titulo>
    </Container2>
    <Container3>
    <Titulo className='secundary-title'>Why us</Titulo>
    </Container3>
    </div>
    </div>
    </>
  )
}

export default App;