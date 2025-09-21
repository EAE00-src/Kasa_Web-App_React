import { Link } from "react-router-dom";
import notFound from '../../assets/404.svg'


function Error(){
    return(
        <div>
            <h1>404</h1>
            <p>Oops! The page you’re looking for doesn’t exist.</p>
            <Link to={'/'}>Return to home page</Link>
        </div>
    )
}

export default Error