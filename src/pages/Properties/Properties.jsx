import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { propertyData } from '../../Data/kasa-data'

import prevArrow from '../../assets/previous-arrow.svg'
import nextArrow from '../../assets/next-arrow.svg'
import Collapse from '../../components/Collapse/Collapse'
import activeStar from '../../assets/active-star.svg'
import inactiveStar from '../../assets/inactive-star.svg'



function PropertyDetails(){
    //useParams will get the id from the route and find the property in the data source
    const {id} = useParams();
    const property = propertyData.find(p => p.id === id);

    if(!property) return <p>Property not found!</p>;

    //destructured data objects from propertyData for readability
    const {title, location, description, pictures, host, rating, equipments, tags} = property;
    //stars will be used to match with the rating in order to display the correct amount of active rating stars
    const stars = [1, 2, 3, 4, 5];

    const [currentIndex, setCurrentIndex] = useState

    return(

        <div className="property-body">
            <div className="property-carousel">
                <img className="carousel-img" src={pictures[0]} alt='{title}' />
                <p>{title}</p>
                <button><img src={prevArrow} alt='Previous image arrow' /></button>
                <button><img src={nextArrow} alt='Next image arrow' /></button>
            </div>
            <div className="property-pg-title">
            <h3>{title}</h3>
            <span>{location}</span>
            </div>
            <div className="property-host">
                <span>{host.name}</span>
                <img className="host-img" src={host.picture} />
            </div>
            <div className="property-rating">
                {stars.map((star) =>(
                    <img key={star} src={
                        star <= parseInt(rating)
                        ? activeStar : inactiveStar
                    }
                    alt={`Rated ${rating} out of 5 stars`}
                    />
                ))}
            </div>
            <div className="property-tags">
                {tags.map((tag, idx) =>(
                    /*A span is created for every tag element with the respective property id*/
                    <span className='tag' key={idx}>{tag}</span>
                ))}
            </div>
            <div className="details">
                <Collapse label='Description' description={description} />
                <Collapse label='Amenities' description={
                    <ul>
                        {equipments.map((item, index) =>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                }
                />
            </div>

        </div>
    )
}
export default PropertyDetails