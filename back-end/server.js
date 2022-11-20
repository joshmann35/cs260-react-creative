const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/creative', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Schemas
const widthSchema = new mongoose.Schema({
    width: String,
    description: String
});
const Widths = mongoose.model('Widths', widthSchema, 'widths');

const sizeSchema = new mongoose.Schema({
    size: String
});
const Sizes = mongoose.model('Sizes', sizeSchema, 'sizes');

const materialSchema = new mongoose.Schema({
    name: String,
    description: String
});
const Materials = mongoose.model('Materials', materialSchema, 'materials');

const stoneSchema = new mongoose.Schema({
    name: String,
    description: String
});
const Stones = mongoose.model('Stones', stoneSchema, 'stones');

const glowSchema = new mongoose.Schema({
    color: String,
    description: String
});
const Glows = mongoose.model('Glows', glowSchema, 'glows');

const blankSchema = new mongoose.Schema({
    name: String,
    image: String,
    widths: [{type: mongoose.Schema.Types.ObjectId, ref: 'Widths'}],
    sizes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Sizes'}],
    materials: [{type: mongoose.Schema.Types.ObjectId, ref: 'Materials'}],
    description: String
});
const Blanks = mongoose.model('Blanks', blankSchema, 'blanks');

const ringSchema = new mongoose.Schema({
    name: String,
    price: Number,
    blank: {type: mongoose.Schema.Types.ObjectId, ref: 'Blanks'},
    width: {type: mongoose.Schema.Types.ObjectId, ref: 'Widths'},
    size: {type: mongoose.Schema.Types.ObjectId, ref: 'Sizes'},
    material: {type: mongoose.Schema.Types.ObjectId, ref: 'Materials'},
    stones: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stones'}],
    color: String,
    glow: {type: mongoose.Schema.Types.ObjectId, ref: 'Glows'},
    description: String
});
const Rings = mongoose.model('Rings', ringSchema, 'rings');

// Models

// Ring API
app.get("/api/rings", async (req, res) => {
    try {
        let rings = await Rings.find();
        res.send(rings);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/rings/:id", async (req, res) => {
    try {
        let ring = await Rings.findById(req.params.id)
            .populate({ path: 'blank', populate: { path: 'widths' } })
            .populate({ path: 'blank', populate: { path: 'sizes' } })
            .populate({ path: 'blank', populate: { path: 'materials' } });
        // console.log(JSON.stringify(ring));
        res.send(ring);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/api/rings", async (req, res) => {
    try {
        let ring = new Rings({
            name: req.body.name,
            price: req.body.price,
            blank: req.body.blank,
            width: req.body.width,
            size: req.body.size,
            material: req.body.material,
            stones: req.body.stones,
            color: req.body.color,
            glow: req.body.glow,
            description: req.body.description
        });
        await ring.save();
        res.send(ring);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put("/api/rings/:id", async (req, res) => {
    try {
        let ring = Rings.findById(req.params.id);
        if (ring) {
            ring.name = req.body.name;
            ring.price = req.body.price;
            ring.blank = req.body.blank;
            ring.width = req.body.width;
            ring.size = req.body.size;
            ring.material = req.body.material;
            ring.stones = req.body.stones;
            ring.color = req.body.color;
            ring.glow = req.body.glow;
            ring.description = req.body.description;
            await ring.save();
            res.send(ring);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete("/api/rings/:id", async (req, res) => {
    try {
        await Rings.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Blank API
app.get("/api/blanks", async (req, res) => {
    try {
        let blanks = await Blanks.find();
        res.send(blanks);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/blanks/:id", async (req, res) => {
    try {
        let blank = await Blanks.findById(req.params.id);
        res.send(blank);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/api/blanks", async (req, res) => {
    try {
        let blank = new Blanks({
            name: req.body.name,
            image: req.body.image,
            widths: req.body.widths,
            sizes: req.body.sizes,
            materials: req.body.materials,
            description: req.body.description
        });
        await blank.save();
        res.send(blank);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put("/api/blanks/:id", async (req, res) => {
    try {
        let blank = Blanks.findById(req.params.id);
        if (blank) {
            blank.name = req.body.name;
            blank.image = req.body.image;
            blank.widths = req.body.widths;
            blank.sizes = req.body.sizes;
            blank.materials = req.body.materials;
            blank.description = req.body.description;
            await blank.save();
            res.send(blank);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete("/api/blanks/:id", async (req, res) => {
    try {
        await Blanks.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// Width API
app.get("/api/widths", async (req, res) => {
    try {
        let widths = await Widths.find();
        res.send(widths);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/widths/:id", async (req, res) => {
    try {
        let width = await Widths.findById(req.params.id);
        res.send(width);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/api/widths", async (req, res) => {
    try {
        let width = new Widths({
            width: req.body.width,
            description: req.body.description
        });
        await width.save();
        res.send(width);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put("/api/widths/:id", async (req, res) => {
    try {
        let width = Widths.findById(req.params.id);
        if (width) {
            width.width = req.body.width;
            width.description = req.body.description;
            await width.save();
            res.send(width);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete("/api/widths/:id", async (req, res) => {
    try {
        await Widths.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// Size API
app.get("/api/sizes", async (req, res) => {
    try {
        let sizes = await Sizes.find();
        res.send(sizes);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/sizes/:id", async (req, res) => {
    try {
        let size = await Sizes.findById(req.params.id);
        res.send(size);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/api/sizes", async (req, res) => {
    try {
        let size = new Sizes({
            size: req.body.size
        });
        await size.save();
        res.send(size);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put("/api/sizes/:id", async (req, res) => {
    try {
        let size = Sizes.findById(req.params.id);
        if (size) {
            size.size = req.body.size;
            await size.save();
            res.send(size);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete("/api/sizes/:id", async (req, res) => {
    try {
        await Sizes.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// Material API
app.get("/api/materials", async (req, res) => {
    try {
        let materials = await Materials.find();
        res.send(materials);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/materials/:id", async (req, res) => {
    try {
        let material = await Materials.findById(req.params.id);
        res.send(material);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/api/materials", async (req, res) => {
    try {
        let material = new Materials({
            name: req.body.name,
            description: req.body.description
        });
        await material.save();
        res.send(material);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put("/api/materials/:id", async (req, res) => {
    try {
        let material = Materials.findById(req.params.id);
        if (material) {
            material.name = req.body.name;
            material.description = req.body.description;
            await material.save();
            res.send(material);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete("/api/materials/:id", async (req, res) => {
    try {
        await Materials.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// Stone API
app.get("/api/stones", async (req, res) => {
    try {
        let stones = await Stones.find();
        res.send(stones);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/stones/:id", async (req, res) => {
    try {
        let stone = await Stones.findById(req.params.id);
        res.send(stone);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/api/stones", async (req, res) => {
    try {
        let stone = new Stones({
            name: req.body.name,
            description: req.body.description
        });
        await stone.save();
        res.send(stone);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put("/api/stones/:id", async (req, res) => {
    try {
        let stone = Stones.findById(req.params.id);
        if (stone) {
            stone.name = req.body.name;
            stone.description = req.body.description;
            await stone.save();
            res.send(stone);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete("/api/stones/:id", async (req, res) => {
    try {
        await Stones.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// Glow API
app.get("/api/glows", async (req, res) => {
    try {
        let glows = await Glows.find();
        res.send(glows);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/glows/:id", async (req, res) => {
    try {
        let glow = await Glows.findById(req.params.id);
        res.send(glow);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/api/glows", async (req, res) => {
    try {
        let glow = new Glows({
            name: req.body.name,
            color: req.body.color,
            description: req.body.description
        });
        await glow.save();
        res.send(glow);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put("/api/glows/:id", async (req, res) => {
    try {
        let glow = Glows.findById(req.params.id);
        if (glow) {
            glow.name = req.body.name;
            glow.color = req.body.color;
            glow.description = req.body.description;
            await glow.save();
            res.send(glow);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete("/api/glows/:id", async (req, res) => {
    try {
        await Glows.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// Server Start
app.listen(3000, () => console.log('Server listening on port 3000!'));
