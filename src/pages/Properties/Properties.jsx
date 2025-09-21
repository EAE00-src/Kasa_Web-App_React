



function PropertyDetails(){



    return(

        <div className="property-body">
            <div className="property-carousel">
                <img className="carousel-img" src={imgBackground} />
                <p className=""></p>
                <button>{leftArrowImg}</button>
                <button>{rightArrowImg}</button>
            </div>
            <div className="property-pg-title">
            <h3>{title}</h3>
            <span>{area}</span>
            </div>
            <div className="property-host">
                <span>{host}</span>
                <img className="host-img" src={hostImg} />
            </div>
            <div className="property-rating">
                <img className="inactive-stars" />
            </div>
            <div className="property-tags">
                <span>{tagDescr}</span>
            </div>
            <div className="details">
                <span>Description 
                    <button>{collapseDetails}</button>
                </span>
                <span>Amenities
                    <button>{collapseAmenities}</button>
                </span>
            </div>

        </div>
    )
}
export default PropertyDetails