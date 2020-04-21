import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu'
/**styles */
import '../style/hamburger-menu.scss'

class HamburgerMenu extends Component {
    
    // state = {
    //     active: false
    // }

    // toggleMenu = () => this.setState({active: !this.state.active})

    render() { 
        return <Menu disableAutoFocus  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } className="menu">
                    <a href="/" className="menu-item">about me</a>
                    <a href="/" className="menu-item">my works</a>
                    <a href="/" className="menu-item">contacts</a>
                </Menu>
    }
}

export default HamburgerMenu;
// return this.state.active? <div className="menu"></div>: <div className="hamburger-menu">
//             <div className="hamburger-menu__icon" onClick={() => {this.toggleMenu()}}>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//         </div>;