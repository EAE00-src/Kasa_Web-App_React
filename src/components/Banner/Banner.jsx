import kasaBanner from '../../assets/Banner-Home.jpg'


function Banner(){
    return(
        <div className="banner">
            <img className="banner-img" src={kasaBanner} />
            <span id='home-banner-msg'>At home, everywhere, and anywhere</span>
        </div>
    )
}

export default Banner