import React from "react";
import Logo from '../assets/images/logo.svg';


export default function Nav () {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                    <img src= {Logo} alt='Apple'/> 
                    </li>
                </ul>
            </div>
        
        </nav>);
}
 
