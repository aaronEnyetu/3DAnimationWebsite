import React from "react";
import Iphone from "../assets/images/iphone-14.jpg"


export default function Jumbotron()
{
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
            <p className="text">Big and Bigger.</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
        </div>

    );

}