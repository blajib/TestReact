import './styles/Banner.css'
import logo from '../assets/arcade.gif'

let Banner = () => {
    return <div className="main-title">
            <img src={logo} alt="logo de mon site" className="baa-logo"></img>
                <h1>Born to be Arcade</h1>
        </div>
}

export default Banner