import footer from '../../assets/kasa-footer.svg'
import './Footer.scss'


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