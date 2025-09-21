import { Link } from "react-router-dom"
import kasaLogo from '../assets/Kasa-header.svg'
import '../styles/Navbar.css'


function Navigation(){
    return(
            <nav className="navbar">
                <Link to={'/'}>
                    <img className="kasa-logo" src={kasaLogo} alt="Kasa logo header" /> 
                </Link>
               <div className="navbar-links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
               </div>
            </nav>
    )

}

export default Navigation