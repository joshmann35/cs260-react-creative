import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewProduct = () => {

    const [blanks, setBlanks] = useState([{ _id: "", name: "" }]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [blank, setBlank] = useState("");
    const [desc, setDesc] = useState("");
    let navigate = useNavigate()

    const fetchBlanks = async () => {
        try {
            let response = await axios.get("/api/blanks");
            setBlanks(response.data);
        }
        catch (error) {
            console.log("Error fetching blanks: " + error);
        }
    };

    useEffect(() => { fetchBlanks() }, []);

    const addProduct = async () => {
        try {
            let product = { name: name, price: price, image: image, blank: blank, description: desc };
            // console.log(JSON.stringify(product));
            await axios.post("/api/rings", product);
            navigate('/react-creative/front-end/build');
        }
        catch (error) {
            console.log("Error adding product: " + error);
        }
    };

    return (
        <div>
                <p>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /></p>
                <p>Price: <input type="number" value={price} onChange={e => setPrice(e.target.value)} /></p>
                <p>Image URL: <input type="text" value={image} onChange={e => setImage(e.target.value)}/></p>
                <p>Blank: <select value={blank} onChange={e => setBlank(e.target.value)}><option selected>Select one</option>{blanks.map(blank => (<option key={blank._id} value={blank._id}>{blank.name}</option>))}</select></p>
                <p>Description: <input type="text" value={desc} onChange={e => setDesc(e.target.value)} /></p>
                <button type="button" onClick={addProduct} value="Submit">Submit</button>
        </div>
    )
};
export default NewProduct;
