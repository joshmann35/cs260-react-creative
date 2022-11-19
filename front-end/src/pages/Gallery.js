import img1 from "../../src/images/1.jpeg";
import img2 from "../../src/images/2.jpg";
import img3 from "../../src/images/3.jpg";
import img4 from "../../src/images/4.jpg";
import img5 from "../../src/images/5.jpg";
import img6 from "../../src/images/6.jpg";
import img7 from "../../src/images/7.jpg";
import img8 from "../../src/images/8.jpg";
import img9 from "../../src/images/9.jpg";
import img10 from "../../src/images/10.jpg";

const Gallery = () => {
    return(
        <div className="gallery">
            <div className="image-container"><img src={img1} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img2} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img3} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img4} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img5} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img6} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img7} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img8} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img9} alt="Picture of Rings" /></div>
            <div className="image-container"><img src={img10} alt="Picture of Rings" /></div>
        </div>
    );
};
export default Gallery;