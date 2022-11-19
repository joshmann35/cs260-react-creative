/*global fetch*/
import CustomRing from "../../src/images/cf_custom.png";
import React from "react";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bgImg: ''};
    }
    
    componentDidMount() {
        this.getCustomBG = this.getCustomBG.bind(this);
        this.getCustomBG();
    }
    
    getCustomBG(r, g, b, tiles, size, border, mode) {
        fetch("https://php-noise.com/noise.php?r=" + r + "&g=" + g + "&b=" + b + "&tiles=" + tiles + "&tileSize=" + size + "&borderWidth=" + border + "&mode=" + mode + "&json")
            .then((response) => {
                if (response.status != 200) {
                    console.error("Error calling the API service: " + response.statusText);
                    return "";
                }
                return response.json();
            }).then((json) => {
                this.setState({bgImg: json.uri});
            });
    }
    render() {
        return (
            <div className="product">
                <div id="custom-container">
                    <div>
                        <img id="custom-ring" src={CustomRing}/>
                        <img id="custom-bg" src={this.state.bgImg} key={this.bgImg}/>
                    </div>
                </div>
                <div className="details">
                    <button id="gen-rand-btn" onClick={this.getCustomBG} className="btn btn-info">Generate Random Ring</button>
                    <p>This random noise generator is brought to you by: <a href="https://php-noise.com/">Noise Background Image Generator</a></p>
                </div>
            </div>
        );
    }

}

export default Product;
