/*global fetch*/
import CustomRing from "../../src/images/cf_custom.png";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const { id } = useParams();
    const [bgImg, setBgImg] = useState("");
    const [product, setProduct] = useState({name: "", price: "", description: "", blank: {sizes: [], widths: []}});
    const [error, setError] = useState("");
    const fetchProduct = async (id) => {
        try {
            // console.log("Attempting fetch!");
            let response = await axios.get("/api/rings/" + id);
            // console.log(JSON.stringify(response));
            setProduct(response.data);
            // console.log(JSON.stringify(product));
        }
        catch (error) {
            setError("Error fetching product: " + error);
        }
    };
    const getCustomBG = (r, g, b, tiles, size, border, mode) => {
        fetch("https://php-noise.com/noise.php?r=" + r + "&g=" + g + "&b=" + b + "&tiles=" + tiles + "&tileSize=" + size + "&borderWidth=" + border + "&mode=" + mode + "&json")
            .then((response) => {
                if (response.status !== 200) {
                    console.error("Error calling the API service: " + response.statusText);
                    return "";
                }
                return response.json();
            }).then((json) => {
                setBgImg(json.uri);
            });
    };
    
    useEffect(() => {
        fetchProduct(id);
    }, []);
    
    if (id !== "") {
        return (
            <div>
                    <p>{error}</p>
                    <div className="product">
                        <div id="custom-container">
                            <img src={product.image}/>
                        </div>
                        <div className="details">
                            <h2>{product.name}</h2>
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                            <p>Size: 
                                <select>
                                     {product.blank.sizes.map(size => (
                                        <option value={size._id}>{size.size}</option>
                                    ))
                                    }
                                </select>
                            </p>
                            <p>Width: 
                                <select>
                                    {product.blank.widths.map(width => (
                                        <option value={width._id}>{width.width}</option>
                                    ))
                                    }
                                </select>
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
    else {

        return (
            <div className="product">
                    <div id="custom-container">
                        <div>
                            <img id="custom-ring" src={CustomRing}/>
                            <img id="custom-bg" src={bgImg} key={bgImg}/>
                        </div>
                    </div>
                    <div className="details">
                        <button id="gen-rand-btn" onClick={getCustomBG} className="btn btn-info">Generate Random Ring</button>
                        <p>This random noise generator is brought to you by: <a href="https://php-noise.com/">Noise Background Image Generator</a></p>
                    </div>
                </div>
        );
    }


};

export default Product;
