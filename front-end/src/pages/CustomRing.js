import axios from "axios"
import { useEffect, useState } from "react"
import ColorPicker from "../components/ColorPicker"
import Accordian from "react-bootstrap/Accordion"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const CustomRing = () => {

    const [widths, setWidths] = useState([{ _id: "", width: "", description: "" }]);
    const [sizes, setSizes] = useState([{ _id: "", size: "" }])
    const [materials, setMaterials] = useState([{ _id: "", name: "", description: "" }])
    const [stones, setStones] = useState([{ _id: "", name: "", description: "" }])
    const [glows, setGlows] = useState([{ _id: "", color: "", description: "" }])
    const [blanks, setBlanks] = useState([{ _id: "", name: "", image: "", widths: [{ _id: "" }], sizes: [{ _id: "" }], materials: [{ _id: "" }], description: "" }])
    const [width, setWidth] = useState("");
    const [size, setSize] = useState("");
    const [material, setMaterial] = useState("");
    const [blank, setBlank] = useState("");
    const [step, setStep] = useState("0");
    // const [ring, setRing] = useState({})

    const fetchWidths = async () => {
        try {
            let response = await axios.get("/api/widths");
            setWidths(response.data);
        }
        catch (error) {
            console.log("Error fetching widths: " + error);
        }
    };

    const fetchSizes = async () => {
        try {
            let response = await axios.get("/api/sizes");
            setSizes(response.data);
        }
        catch (error) {
            console.log("Error fetching sizes: " + error);
        }
    };

    const fetchMaterials = async () => {
        try {
            let response = await axios.get("/api/materials");
            setMaterials(response.data);
        }
        catch (error) {
            console.log("Error fetching materials: " + error);
        }
    };

    const fetchStones = async () => {
        try {
            let response = await axios.get("/api/stones");
            setStones(response.data);
        }
        catch (error) {
            console.log("Error fetching stones: " + error);
        }
    };

    const fetchGlows = async () => {
        try {
            let response = await axios.get("/api/glows");
            setGlows(response.data);
        }
        catch (error) {
            console.log("Error fetching glows: " + error);
        }
    };

    const fetchBlanks = async () => {
        try {
            let response = await axios.get("/api/blanks");
            setBlanks(response.data);
        }
        catch (error) {
            console.log("Error fetching blanks: " + error);
        }
    };

    useEffect(() => {
        fetchWidths();
        fetchSizes();
        fetchMaterials();
        fetchStones();
        fetchGlows();
        fetchBlanks();
    }, []);

    return (
        <div>
            <h1>Create a Ring</h1>
            <Accordian activeKey={step} flush>
                <Accordian.Item eventKey="0">
                    {/* <Accordian.Header className="createCustom">Size: {sizes.map((s) => s._id === size ? s.size : "")}</Accordian.Header> */}
                    <Accordian.Button onClick={() => setStep("0")} className="btn btn-dark createCustom">Size: {sizes.map((s) => s._id === size ? s.size : "")}</Accordian.Button>
                    <Accordian.Body>
                        <ListGroup defaultActiveKey={sizes[0]._id}>
                            {sizes.map((s) =>
                                (<ListGroup.Item eventKey={s._id} action onClick={() => { setSize(s._id); setStep("1"); }} className="createCustom">{s.size}</ListGroup.Item>)
                            )}
                        </ListGroup>
                    </Accordian.Body>
                </Accordian.Item>
                <Accordian.Item eventKey="1">
                    {/* <Accordian.Header className="createCustom">Width: {widths.map((w) => w._id === width ? w.width : "")}</Accordian.Header> */}
                    <Accordian.Button onClick={() => setStep("1")} className="btn btn-dark createCustom" >Width: {widths.map((w) => w._id === width ? w.width : "")}</Accordian.Button>
                    <Accordian.Body>
                        <ListGroup defaultActiveKey={widths[0]._id}>
                            {widths.map((w) =>
                                (<ListGroup.Item eventKey={w._id} action onClick={() => { setWidth(w._id); setStep("2"); }} className="createCustom">{w.width}</ListGroup.Item>)
                            )}
                        </ListGroup>
                    </Accordian.Body>
                </Accordian.Item>
                <Accordian.Item eventKey="2">
                    {/* <Accordian.Header className="createCustom">Material: {materials.map((m) => m._id === material ? m.name : "")}</Accordian.Header> */}
                    <Accordian.Button onClick={() => setStep("2")} className="btn btn-dark createCustom">Material: {materials.map((m) => m._id === material ? m.name : "")}</Accordian.Button>
                    <Accordian.Body>
                        <ListGroup defaultActiveKey={materials[0]._id}>
                            {materials.map((m) =>
                            (<ListGroup.Item eventKey={m._id} action onClick={() => { setMaterial(m._id); setStep("3"); }} className="createCustom">
                                <Card style={{ width: '18rem' }} className="btn-dark">
                                    {/* <Card.Img variant="top" src={m.image} /> */}
                                    <Card.Body className="btn-dark">
                                        <Card.Title>{m.name}</Card.Title>
                                        <Card.Text>
                                            {m.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>)
                            )}
                        </ListGroup>
                    </Accordian.Body>
                </Accordian.Item>
                <Accordian.Item eventKey="3">
                    {/* <Accordian.Header className="createCustom">Blank: {blanks.map((b) => b._id === blank ? b.name : "")}</Accordian.Header> */}
                    <Accordian.Button onClick={() => setStep("3")} className="btn btn-dark createCustom">Blank: {blanks.map((b) => b._id === blank ? b.name : "")}</Accordian.Button>
                    <Accordian.Body>
                        <ListGroup defaultActiveKey={blanks[0]._id}>
                            {blanks.map((b) =>
                            (<ListGroup.Item eventKey={b._id} action onClick={() => { setBlank(b._id); setStep("4"); }} className="createCustom">
                                <Card style={{ width: '18rem' }} className="btn-dark">
                                    <Card.Img variant="top" src={b.image} />
                                    <Card.Body className="btn-dark">
                                        <Card.Title>{b.name}</Card.Title>
                                        <Card.Text>
                                            {b.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>)
                            )}
                        </ListGroup>
                    </Accordian.Body>
                </Accordian.Item>
                <Accordian.Item eventKey="4">
                    {/* <Accordian.Header className="createCustom">Overview</Accordian.Header> */}
                    <Accordian.Button onClick={() => setStep("4")} className="btn btn-dark createCustom">Overview</Accordian.Button>
                    <Accordian.Body>
                        <h4>Custom Ring</h4>
                        <span>Size: {sizes.map((s) => s._id === size ? s.size : "")}</span><br />
                        <span>Width: {widths.map((w) => w._id === width ? w.width : "")}</span><br />
                        <span>Material: {materials.map((m) => m._id === material ? m.name : "")}</span><br />
                        <span>Blank: {blanks.map((b) => b._id === blank ? b.name : "")}</span><br />
                        <Button variant="dark">Add to Cart</Button>
                    </Accordian.Body>
                </Accordian.Item>

            </Accordian>
            {/* <h3>Size:</h3>
            <select>
                {sizes.map(e =>
                    (<option>{e.size}</option>)
                )}
            </select>
            <h3>Width:</h3>
            <select>
                {widths.map(e =>
                    (<option>{e.width}</option>)
                )}
            </select>
            <h3>Material:</h3>
            <select>
                {materials.map(e =>
                    (<option>{e.name}</option>)
                )}
            </select>
            <h3>Blank:</h3>
            <select>
                {blanks.map(e =>
                    (<option>{e.name}</option>)
                )}
            </select>

            <ColorPicker /> */}
        </div>
    );

};

export default CustomRing