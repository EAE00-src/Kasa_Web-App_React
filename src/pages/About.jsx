import aboutBanner from '../assets/Kasa-about.jpg'
import collapseArrow from '../assets/about-collapse-arrow.svg'

function About(){


    return (
    <div className="about-body">
        <div className="about-banner">
            <img src={aboutBanner} alt={title} />
        </div>
        <div className="about-values">
            <div className='values'>
            <h3>Reliability</h3>
            <button><img src={collapseArrow} alt='Dropdown arrow' /></button>
            </div>
            <div className='values'>
            <h3>Respect</h3>
            <button><img src={collapseArrow} alt='Dropdown arrow' /></button>
            </div>
            <div className='values'>
            <h3>Service</h3>
            <button><img src={collapseArrow} alt='Dropdown arrow' /></button>
            </div>
            <div className='values'>
            <h3>Security</h3>
            <button><img src={collapseArrow} alt='Dropdown arrow' /></button>
            </div>
        </div>
    
    </div>
    )
}

export default About