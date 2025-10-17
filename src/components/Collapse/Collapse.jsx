import { useState } from 'react'
import { useLocation } from 'react-router-dom';

import collapseArrow from '../../assets/about-collapse-arrow.svg'
import './Collapse.scss'


function Collapse({label, description}){
    const [isOpen, setIsOpen] = useState(false);
    const pageLocation = useLocation();
    const isAboutPage = pageLocation.pathname === '/about';
    const aboutCollapse = isAboutPage ? 'about-collapse' : 'property-details';

    function toggleDropdown(){
        setIsOpen(closed => !closed);
    }

    return(
        <div className={`collapse ${aboutCollapse}`}>
            <div className='collapse-header' onClick={toggleDropdown}>
                <h3>{label}</h3>
                <button className={`arrow-button ${isOpen ? 'open' : ''}`}>
                    <img src={collapseArrow} alt='Dropdown arrow' />
                    </button>
            </div>

                <div className={`details ${isOpen ? 'open' : ''}`}>
                    {description}
                </div>


        </div>
    );
}

export default Collapse;