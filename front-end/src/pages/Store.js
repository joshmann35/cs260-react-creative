import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Store = () => {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    
    const fetchProducts = async () => {
        try {
            const response = await axios.get("/api/rings");
            setProducts(response.data);
        }
        catch (error) {
            setError("Error fetching products: " + error);
        }
    };
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
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
                <p>{error}</p>
                {products.map(product => (
                    <div key={product._id} className="shop-item">
                        <Link to={"/react-creative/front-end/build/product/" + product._id}>
                            <img src={product.image}/>
                            <h2>{product.name}</h2>
                            <h2>{product.price}</h2>
                        </Link>
                    </div>
                ))}
                <div className="shop-item">
                    <Link to={"/react-creative/front-end/build/newProduct"}>
                        <h2>Add new product</h2>
                    </Link>
                </div>
            </div>
            <div className="sidebar"></div>
        </div>
    );
};
export default Store;