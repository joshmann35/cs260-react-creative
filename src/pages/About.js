/*global fetch*/
import RingImg from "../../src/images/about.jpg";
import React from "react";

class About extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {chuckNorrisFact: ""};
    }
    
    componentDidMount() {
        this.getFact = this.getFact.bind(this);
        this.getFact();
    }
    
    getFact() {
        fetch("https://api.chucknorris.io/jokes/random?category=food")
            .then((response) => {
                if (response.status != 200) {
                    console.error("Error calling the API service: " + response.statusText);
                    return "";
                }
                return response.json();
            }).then((json) => {
                this.setState({chuckNorrisFact: json.value});
            });
    }
    
    render() {
        return(
            <div className="about-wrapper">
                <div className="about-container">
                    <div className="about">
                        <h1>Cottonwood Ring Co</h1>
                        <p>Here at Cottonwood Ring Co, we are devoted to your happiness. We delight ourselves in crafting jewelry that makes you smile! 
                        Whether you choose one of our designs, or come up with your own, we gaurentee your satisfaction! 
                        Cottonwood Ring Co was established in 2020 and has had many customers in the last few years. We pride ourselves in quality handcrafted jewelry that is unique and stylish. 
                        There are so many options to choose from! Some of our rings even include gems mined locally in Utah, by us! </p>
                        <p>I also enjoy Chuck Norris Facts! Here's a random one from the <a href="https://api.chucknorris.io/">Chuck Norris Facts API</a>:<br/></p><p id="chucknorris">{this.state.chuckNorrisFact}</p>
                    </div>
                    <div className="image-container"><img src={RingImg} alt="Picture of Ring" /></div>
                </div>
            </div>
        );
    }
}
export default About;