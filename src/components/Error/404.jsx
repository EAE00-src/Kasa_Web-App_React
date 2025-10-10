import { Link } from "react-router-dom";
import notFound from '../../assets/404.svg'
import './404.scss'


function Error(){
    return(
        <div className="error">
            <img src={notFound} alt="404 error" />
            <p>Oops! The page you’re looking for doesn’t exist.</p>
            <Link to={'/'}>Return to home page</Link>
        </div>
    )
}

export default Error