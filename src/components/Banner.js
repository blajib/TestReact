import './styles/Banner.css'
import logo from '../assets/arcade.gif'
import Recommendation from "./Recommendation"

let Banner = () => {
    return <div className="main-title">
            <img src={logo} alt="logo de mon site" className="baa-logo"></img>
                <h1>Born to be Arcade</h1>
                <h3>Est-ce le moment de m'acheter une borne ??</h3>
                <Recommendation/>
        </div>
}

export default Banner