import { Outlet, Link } from "react-router-dom";
import Logo from "../../src/images/Asset_1.png";
import React from "react";
import { useLocation } from "react-router-dom";
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

class Layout extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(window.location.pathname);
        this.state = {links: [
            {path: "/react-creative/front-end/build/", text: "Home", isActive: true},
            {path: "/react-creative/front-end/build/store", text: "Store", isActive: false},
            {path: "/react-creative/front-end/build/custom", text: "Create", isActive: false},
            {path: "/react-creative/front-end/build/gallery", text: "Gallery", isActive: false},
            {path: "/react-creative/front-end/build/about", text: "About", isActive: false},
            {path: "/react-creative/front-end/build/cart", text: "", isActive: false},
        ]};
    }
    
    handleClick(i) {
        const links = this.state.links.slice();
        for(const j in links) {
            links[j].isActive = i == j;
        }
        this.setState({links: links});
    }
    
    render() {
        return (
            <div className="body">
            <div className="main">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between">
                    <Link className="navbar-brand" to="/react-creative/front-end/build/" onClick={() => this.handleClick(0)}><img src={Logo} /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {this.state.links.map((link, i) =>
                                <NavLink
                                    path={link.path}
                                    text={link.text}
                                    isActive={link.isActive}
                                    key={link.path}
                                    onClick={() => this.handleClick(i)}
                                />
                            )}
                        </ul>
                    </div>
                </nav>
                
                <Outlet />
            </div>
            <footer>
                Copyright 2022<br />
                <a href="https://github.com/joshmann35/cs260-react-creative"><i className="fa fa-github"></i></a>
                <a href="https://www.instagram.com/cottonwoodringco"><i className="fa fa-instagram"></i></a>
                <a href="https://www.facebook.com/cottonwoodringco"><i className="fa fa-facebook"></i></a>
                <p>For CS260 Creative Project</p>
            </footer>
            </div>
        );
    }
}

class NavLink extends React.Component {
    render() {
        return(
            <li className={"nav-item my-auto " + (this.props.isActive ? "active": "")}>
                <Link 
                    className="nav-link"
                    activeclassname="active"
                    to={this.props.path}
                    onClick={() => this.props.onClick()}
                >
                    {this.props.text ? this.props.text : <i className={"nav-link fa fa-shopping-cart " + (this.props.isActive ? "active": "")}/>}
                </Link>
            </li>
        )
    }
}

export default Layout;