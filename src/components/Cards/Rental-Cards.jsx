import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function RentalCards({id, cover, title}){


    return(
        <Link to={`/rentals/${id}`} className="rental-link">
            <article className="rental-card">
                <div className="property-cover">
                    <img src={cover} alt={title} />
                </div>
                <div className="property-title">
                    <span className="property-title">{title}</span>
                </div>
            </article>
        </Link>
    )
}

RentalCards.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default RentalCards