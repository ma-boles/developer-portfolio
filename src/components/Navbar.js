import React from "react";
import "./NavBar.css";
import logo from "./images/Grey-Yourlo-Logo.jpg";
import github from "./images/GitHub_Logo.png";
import linkedin from "./images/LinkedIn_2021.svg.png";
import IGLogo from "./images/Instagram_logo.svg.png"



export default function Navbar () {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 470) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
    }



    return (
        <>
        <nav id="navbar">
            <img className="logo"src={logo}></img>
        <div className="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Projects</a></li>
                <li><a href="index.html">Contact</a></li>
                <li className="dropdown">
                    <button className="dropdown--menu">Socials</button>
                        <div className="dropdown-content">
                            <a href="https://github.com/ma-boles" >
                                <div className="socials">
                                <img src={github} className="logo--github"></img>
                                </div>
                                </a>
                            <a href="https://www.linkedin.com/in/mary-boles/" >
                                <div className="socials">
                                <img src={linkedin} className="logo--linkedin"></img>
                                </div>
                                </a> 
                            <a href="https://www.instagram.com/mab.codes/">
                                <div className="socials">
                                <img src={IGLogo} className="logo--instagram"></img>
                                </div>
                                </a> 
                        </div>
                </li>
            </ul>
        </div>
        </nav>
        </>
    )
}