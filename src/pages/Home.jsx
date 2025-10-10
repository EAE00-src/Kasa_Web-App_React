import Banner from "../components/Banner/Banner"
import RentalCards from "../components/Cards/Rental-Cards"
import { propertyData } from "../Data/kasa-data"
import homeBanner from '../assets/Banner-Home.jpg'
import '../styles/Home.scss'


function Home(){


    return (
        <div className="kasa-home">
            <Banner banner={homeBanner} message={'At home, everywhere, and anywhere'} />
    
            <section className="property-gallery">
                {propertyData.map((property) => (
                    <RentalCards 
                    key={property.id}
                    id={property.id}
                    cover={property.cover}
                    title={property.title}
                    />
                ))}
            </section>
        </div>
    
    )
}

export default Home