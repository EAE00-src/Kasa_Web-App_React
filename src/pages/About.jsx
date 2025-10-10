import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Collapse'
import aboutBanner from '../assets/Kasa-about.jpg'

function About(){


    return (
    <div className="about-body">
        <div className="about-banner">
            <Banner banner={aboutBanner} message={''} />
        </div>
        <div className="about-values">
            <Collapse label="Reliability" />
            <Collapse label="Respect" />
            <Collapse label="Service" />
            <Collapse label="Security" />
        </div>
    
    </div>
    )
}

export default About