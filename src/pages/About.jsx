import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Collapse'
import aboutBanner from '../assets/Kasa-about.jpg'
import '../styles/About.scss'

function About(){


    return (
    <div className="about-body">
        <div className="about-banner">
            <Banner banner={aboutBanner} message={''} />
        </div>
        <div className="about-values">
            <Collapse 
            label="Reliability" 
            description={
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            } 
            />

            <Collapse 
            label="Respect" 
            description={
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            }
            />

            <Collapse 
            label="Service" 
            description={
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            }
            />

            <Collapse 
            label="Security"
            description={
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            }
            />
        </div>
    
    </div>
    )
}

export default About