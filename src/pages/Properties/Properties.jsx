import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { propertyData } from '../../Data/kasa-data'

import prevArrow from '../../assets/previous-arrow.svg'
import nextArrow from '../../assets/next-arrow.svg'
import Collapse from '../../components/Collapse/Collapse'
import activeStar from '../../assets/active-star.svg'
import inactiveStar from '../../assets/inactive-star.svg'
import './Properties.scss'



function PropertyDetails(){
    //useParams will get the id from the route and find the property in the data source
    const {id} = useParams();
    const property = propertyData.find(p => p.id === id);

    if(!property) return <p>Property not found!</p>;

    //destructured data objects from propertyData for readability
    const {title, location, description, pictures, host, rating, equipments, tags} = property;
    //stars will be used to match with the rating in order to display the correct amount of active rating stars
    const stars = [1, 2, 3, 4, 5];

    const [currentIndex, setCurrentIndex] = useState(0);

    function nextImg(){
        setCurrentIndex((currentIdx) =>
            currentIdx === pictures.length - 1 ? 0 : currentIdx + 1
            //if the currentIdx is equal to the length of the pictures array,
                //the currentIdx will reset to 0 before being able to increment again.
            //pictures.length - 1 is there since the currentIdx is counting up from the 0-index within the array
        );
    };

        function prevImg(){
        setCurrentIndex((currentIdx) =>
            currentIdx === 0 ? pictures.length - 1 : currentIdx - 1
            //if the currentIdx is equal to exactly 0, 
                //set the currentIdx to the pictures.length - 1 value before decrementing the currentIdx with - 1
        );
    };

    return(

        <section className="property-body">
            <div className="property-carousel">
                <div className="carousel-wrapper">
                    <div className="carousel-slider" style={{transform: `translateX(-${currentIndex * 100}%)`,}}>
                        {pictures.map((src, index) =>(
                            <img key={index} src={src} alt={`Slide ${index + 1}`} className="carousel-image" loading='lazy' />
                        ))}
                    </div>
                </div>

                    <div className='carousel-counter'>
                        {currentIndex + 1} / {pictures.length}
                    </div>

                <button className='prev-img' onClick={prevImg}>
                    <img src={prevArrow} alt='Previous image arrow' />
                </button>
                <button className='next-img' onClick={nextImg}>
                    <img src={nextArrow} alt='Next image arrow' />
                </button>
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

        </section>
    )
}
export default PropertyDetails