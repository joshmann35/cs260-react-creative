import TopImg from "../../src/images/background.jpg"
import BotImg from "../../src/images/2.jpg"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home">
            <div className="home-image-container"><img src={TopImg} /></div>
            <div className="home-container">
                <Link type="button" className="btn btn-info" to="store">Shop Now</Link>
                <div className="welcome">
                    <h1>The NEW Cottonwood Ring Co</h1>
                    <p>Custom handmade rings for every occasion!</p>
                </div>
            </div>
            <div className="home-image-container2"><img src={BotImg} /></div>
        </div>

    )
}

export default Home