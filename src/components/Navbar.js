import React from "react";
import { useEffect, useRef } from "react";
import "../styles/Navbar.css";
import logo from "../images/Grey-Yourlo-Logo.jpg";
import github from "../images/GitHub_Logo.png";
import linkedin from "../images/LinkedIn_2021.svg.png";
import IGLogo from "../images/Instagram_logo.svg.png"



export default function Navbar () {
    
    const handleClick = (anchor) => () => {
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
  
    const headerRef = useRef(null);
  
    useEffect(() => {
      let prevScrollPos = window.scrollY;
  
      const handleScroll = () => {
        const currScrollPos = window.scrollY;
        const currHeaderElement = headerRef.current;
  
        if (!currHeaderElement)
          return;
        
        if (prevScrollPos > currScrollPos)
          currHeaderElement.style.transform = "translateY(0)";
        else
          currHeaderElement.style.transform = "translateY(-200px)";
        
        prevScrollPos = currScrollPos;
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 470) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
    }


    //scroll function for mobile view top button
    let topbutton = document.getElementById("top--button");
    window.onscroll = function() {scrollTopFunction()};
    
    //top button appears/disappears on scroll
    function scrollTopFunction () {
      if(document.body.scrollTop > 520 ||
        document.documentElement.scrollTop > 270) {
          topbutton.style.display = "0px";
        } else {
          topbutton.style.display = "-80px"; 
        }
    };


    return (
        <>
        <nav id="navbar">
            <img className="logo"src={logo} alt="website logo"></img>
          <div className="navbar">
              <ul>
                  <li><a href="/#home" onClick={handleClick("home")}>Home</a></li>
                  <li><a href="/#about" onClick={handleClick("about")}>About</a></li>
                  <li><a href="/#projects" onClick={handleClick("projects")}>Projects</a></li>
                  <li><a href="/#contact" onClick={handleClick("contact")}>Contact</a></li>
                  <li className="dropdown">
                      <button className="dropdown--menu">Socials</button>
                          <div className="dropdown-content">
                              <a href="https://github.com/ma-boles" >
                                  <div className="socials">
                                  <img src={github} className="logo--github" alt="Github logo"></img>
                                  </div>
                                  </a>
                              <a href="https://www.linkedin.com/in/mary-boles/" >
                                  <div className="socials">
                                  <img src={linkedin} className="logo--linkedin" alt="LinkedIn logo"></img>
                                  </div>
                                  </a> 
                              <a href="https://www.instagram.com/mab.codes/">
                                  <div className="socials">
                                  <img src={IGLogo} className="logo--instagram" alt="Instagram logo"></img>
                                  </div>
                                  </a> 
                          </div>
                  </li>
              </ul>
          </div>
        </nav>

        <div className="top--button--group">
          <button className="top--button" id="top--button" >
          <a href="/#home" onClick={handleClick("home")} id="top--a">TOP
         </a></button>
        </div>
        </>
    )
}