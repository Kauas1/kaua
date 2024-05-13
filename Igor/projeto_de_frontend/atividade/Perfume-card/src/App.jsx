import {Titulo, Titulo2,Titulo3, Container, Price, Price2, Submit} from '../src/Container/Container'
import image from '../images/image-product-desktop.jpg'
import cart from '../images/icon-cart.svg'
import './App.css'

const App = () =>{

  return(
    <>
    <Container>
    <div className='PutTogether'>
    <img src={image} alt="" className='image'/>

        <div className='container'>
    <Titulo className='Title'>Perfume</Titulo>
    <Titulo2 className='Title2'>Gabrielle Essence Eau De Parfum</Titulo2>
    <Titulo3 className='Title3'>A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</Titulo3>
            <div className="price"> 
    <Price>$149.99</Price>
    <Price2 className='price2'>$169.99</Price2>
            </div>
            
    <Submit className='submit'> <img src={cart} alt=""/>Add to Cart</Submit>
       </div>
    </div>
    </Container>
   
    
    </>
  )

    
  
}

export default App;