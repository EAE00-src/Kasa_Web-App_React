import { useLocation } from 'react-router-dom'
import './Banner.scss'

function Banner({message}){
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const bannerSwap = isHomePage ? 'home-banner' : 'about-banner';

    return(
        <div className={`banner ${bannerSwap}`}>
            <span id='home-banner-msg'>{message}</span>
        </div>
    )
}

export default Banner