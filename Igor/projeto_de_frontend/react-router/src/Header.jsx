import {Link} from 'react-router-dom'
import './App.css'

const Header = () => {
    
    return(
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='sobre'>Sobre</Link>
        </nav>
    )
}

export default Header 