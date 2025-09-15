import { Link } from "react-router-dom"
import kasaLogo from '../assets/Kasa-header.svg'


function Header(){
    return(
        <header>
            <nav className="navbar">
                <Link to={'/'}>
                    <img src={kasaLogo} alt="Kasa-logo header" /> 
                </Link>
               <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
               </div>
            </nav>
        </header>
    )

}