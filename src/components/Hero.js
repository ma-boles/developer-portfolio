import React from "react";
import './Home.css';

export default function Hero () {
    return (
        <div className="home">
            <div className="greeting">
            <h2 className="h2--greeting">I'm<strong>Mary.</strong></h2>< br />
                <h2 className="h1--greeting">Hello! <span><span className="span--strong">Front-End</span><br /> Web Developer</span></h2>
            </div>

            {/*arrows*/}
            <div>
                <a href="index.html"><svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg></a>
            </div>
        </div>
    )
}
{/*I'm a web developer who enjoys making websites that are easy to use and wonderfully pleasing to the eye.*/}