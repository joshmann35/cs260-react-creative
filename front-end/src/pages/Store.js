import MalachiteRing from "../../src/images/1.jpeg";
import OffsetRing from "../../src/images/2.jpg";
import MysteryRing from "../../src/images/3.jpg";
import AmberRing from "../../src/images/4.jpg";
import AmethystRing from "../../src/images/5.jpg";
import FluoriteRing from "../../src/images/6.jpg";
import { Link } from "react-router-dom"

const Store = () => {
    return (
        <div className="store">
            <div className="sidebar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h4>Filters</h4>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#filterBar" aria-controls="filterBar" aria-expanded="false" aria-label="Toggle filters">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="filterBar">
                        <div className="sidebar-content">
                            <hr/>
                            <h5>Ring Material</h5>
                            <div><input type="checkbox"/> Black Ceramic</div>
                            <div><input type="checkbox"/> White Ceramic</div>
                            <div><input type="checkbox"/> Tungsten Carbide</div>
                            <div><input type="checkbox"/> Carbon Fiber</div>
                            <hr/>
                            <h5>Ring Width</h5>
                            <div><input type="checkbox"/> 8mm</div>
                            <div><input type="checkbox"/> 6mm</div>
                            <div><input type="checkbox"/> 4mm</div>
                        </div>
                    </div>
                </nav>

            </div>
            <div className="shop-grid">
                <div className="shop-item">
                    <Link to="/react-creative/build/product">
                        <img src={MalachiteRing}/>
                        <h2>Malachite Ring</h2>
                        <div className="sale">
                            <h2 className="old-sale-price">$70</h2>
                            <h2 className="sale-price"> $60</h2>
                            <h2 className="sale-text">SALE</h2>
                        </div>
                    </Link>
                </div>
                <div className="shop-item">
                    <Link to="/react-creative/build/product">
                        <img src={OffsetRing}/>
                        <h2>Offset Ring</h2>
                        <h2>$70</h2>
                    </Link>
                </div>
                <div className="shop-item">
                    <Link to="/react-creative/build/product">
                        <img src={MysteryRing}/>
                        <h2>Mystery Ring</h2>
                        <h2>$70</h2>
                    </Link>
                </div>
                <div className="shop-item">
                    <Link to="/react-creative/build/product">
                        <img src={AmberRing}/>
                        <h2>Amber Ring</h2>
                        <h2>$70</h2>
                    </Link>
                </div>
                <div className="shop-item">
                    <Link to="/react-creative/build/product">
                        <img src={AmethystRing}/>
                        <h2>Amethyst Ring</h2>
                        <h2>$70</h2>
                    </Link>
                </div>
                <div className="shop-item">
                    <Link to="/react-creative/build/product">
                        <img src={FluoriteRing}/>
                        <h2>Fluorite Ring</h2>
                        <h2>$70</h2>
                    </Link>
                </div>
            </div>
            <div className="sidebar"></div>
        </div>
    )
}
export default Store