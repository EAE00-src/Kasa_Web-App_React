import { useState } from 'react'

import collapseArrow from '../../assets/about-collapse-arrow.svg'

function Collapse({label, description}){
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown(){
        setIsOpen(closed => !closed);
    }

    return(
        <div className='collapse'>
            <div className='collapse-header' onClick={toggleDropdown}>
                <h3>{label}</h3>
                <button className={`arrow-button ${isOpen ? 'open' : ''}`}>
                    <img src={collapseArrow} alt='Dropdown arrow' />
                    </button>
            </div>
            {isOpen && (
                <div className='details'>
                    {description}
                </div>
            )}

        </div>
    );
}

export default Collapse;