import Banner from "../components/Banner/Banner"
import RentalCards from "../components/Cards/Property-Cards"
import { propertyData } from "../Data/kasa-data"


function Home(){


    return (
        <div className="kasa-home">
            <Banner />
    
            <div className="property-gallery">
                {propertyData.map((property) => (
                    <RentalCards 
                    key={property.id}
                    id={property.id}
                    cover={property.cover}
                    title={property.title}
                    />
                ))}
            </div>
        </div>
    
    )
}

export default Home