const axios = require('axios');

const baseURL = "http://localhost:3000"

width_ids = []
size_ids = [];
material_ids = []
blank_ids = [];
const clear = async () => {
    await axios.delete(`${baseURL}/api/clear`)
}

const insertWidths = async () => {
    widths = [
        { width: "8mm", description: "Typical size for men" },
        { width: "6mm", description: "A good medium width" },
        { width: "4mm", description: "Typical size for women" }
    ];
    for (let i = 0; i < widths.length; i++) {
        const response = await axios.post(`${baseURL}/api/widths`, widths[i]);
        if (response.status != 200)
            console.log(`Error adding width ${widths[i].width}, code ${response.status}`);
        else
            width_ids.push(response.data._id);
    }
}
const insertSizes = async () => {
    sizes = [
        { size: "4" },
        { size: "4.5" },
        { size: "5" },
        { size: "5.5" },
        { size: "6" },
        { size: "6.5" },
        { size: "7" },
        { size: "7.5" },
        { size: "8" },
        { size: "8.5" },
        { size: "9" },
        { size: "9.5" },
        { size: "10" },
        { size: "10.5" },
        { size: "11" },
        { size: "11.5" },
        { size: "12" },
        { size: "12.5" },
        { size: "13" },
        { size: "13.5" },
        { size: "14" },
        { size: "14.5" }
    ];
    for (let i = 0; i < sizes.length; i++) {
        const response = await axios.post(`${baseURL}/api/sizes`, sizes[i]);
        if (response.status != 200)
            console.log(`Error adding size ${sizes[i].size}, code ${response.status}`);
        else
            size_ids.push(response.data._id);
    }
}
const insertMaterials = async () => {
    materials = [
        { name: "Carbon Fiber", description: "A light-weight and strong material that is matte black" },
        { name: "Tungsten Carbide", description: "A darker silvery metal that is heavier and very durable" },
        { name: "Black Ceramic", description: "A very durable glossy black material" },
        { name: "White Ceramic", description: "A very durable glossy white material" }
    ];
    for (let i = 0; i < materials.length; i++) {
        const response = await axios.post(`${baseURL}/api/materials`, materials[i]);
        if (response.status != 200)
            console.log(`Error adding material ${materials[i].name}, code ${response.status}`);
        else
            material_ids.push(response.data._id);
    }
}
const insertBlanks = async () => {
    blanks = [
        {
            name: "Single Channel",
            image: "https://cottonwoodringco.square.site/uploads/1/3/5/0/135084880/s912669409542963208_p22_i1_w4032.jpeg?width=1200",
            widths: width_ids,
            sizes: size_ids,
            materials: material_ids,
            description: "A classic ring blank with a single channel"
        },
        {
            name: "Double Channel",
            image: "https://cdn.shopify.com/s/files/1/0010/3242/1412/products/Titanium_Double_Channel_Feb_7_grande.jpg?v=1582226361",
            widths: [width_ids[2]],
            sizes: size_ids,
            materials: material_ids,
            description: "A classic ring blank with two channels"
        }
    ];
    for (let i = 0; i < blanks.length; i++){
        const response = await axios.post(`${baseURL}/api/blanks`, blanks[i]);
        if (response.status != 200)
            console.log(`Error adding blank ${blanks[i].name}, code ${response.status}`);
        else
            blank_ids.push(response.data._id);
            console.log(response.data._id);
    }
}
const insertRings = async () => {
    console.log("INSERTING RING!")
    console.log(JSON.stringify(blank_ids));
    rings = [{
        name: "Glacial Pool Ring",
        image: "https://cottonwoodringco.square.site/uploads/1/3/5/0/135084880/s912669409542963208_p7_i1_w1295.jpeg?width=1200",
        price: 70,
        blank: blank_ids[0],
        description: "A stunning Tungsten Carbide Ring inlaid with Utah Mined Fluorite."
    }];
    for (let i = 0; i < rings.length; i++) {
        const response = await axios.post(`${baseURL}/api/rings`, rings[i]);
        if (response.status != 200)
            console.log(`Error adding ring ${rings[i].name}, code ${response.status}`);
    }
};

clear().then(()=>insertWidths().then(()=>insertSizes().then(()=>insertMaterials()).then(()=>insertBlanks().then(()=>insertRings()))));