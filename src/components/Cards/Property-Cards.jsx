import { Link } from "react-router-dom";


function RentalCards(){


    return(
        <div className="property-cards">
            <Link to='/rentals/${id}'>
                <div className="property-images">
                    <img src={rental.cover} alt={rental.title} />
                </div>
                <div className="property-title">
                    <h3>{rental.title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default RentalCards