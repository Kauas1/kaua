import {Link} from 'react-router-dom'

const Header = () => {
    
    return(
        <nav>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='sobre'>Sobre</Link>
        </nav>
    )
}

export default Header 