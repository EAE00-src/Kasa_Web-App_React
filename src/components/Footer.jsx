import footer from '../assets/kasa-footer.svg'
import '../styles/Footer.css'


function Footer(){
    return (
        <footer>
            <div>
                <img src={footer} alt='Kasa logo' />
            </div>
            <div><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer