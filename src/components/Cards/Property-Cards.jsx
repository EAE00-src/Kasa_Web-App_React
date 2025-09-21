import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function RentalCards({id, cover, title}){


    return(
        <Link to={`/rentals/${id}`}>
            <div className="property-images">
                <img src={cover} alt={title} />
            </div>
            <div className="property-title">
                <span className="property-title">{title}</span>
            </div>
        </Link>
    )
}

RentalCards.propType = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default RentalCards