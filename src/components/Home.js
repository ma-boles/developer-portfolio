import React from "react";
import { useEffect, useRef } from "react";
import '../styles/Home.css';

export default function Home () {
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

      
    return (
        <section className="home" id="home">
            <div className="greeting">
                <h2 className="h1--greeting">Hello!</h2> <br />
                <h2 className="h2--greeting">I'm<strong>Mary.</strong></h2>
               <h2 className="h2--span"><span> <span className="span--strong">Front-End</span><br /> Web Developer</span></h2> <hr />

            </div>
            <div className="buttons--home">
                <a href="/#about" onClick={handleClick("about")}><button className="home--buttons">ABOUT</button></a>
                <a href="/#projects" onClick={handleClick("projects")}><button className="home--buttons">PROJECTS</button></a>
                <a href="/#contact" onClick={handleClick("contact")}><button className="home--buttons">CONTACT</button></a>
            </div>

            {/*arrows*/}
            <div>
                <a href="index.html"><svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg></a>
            </div>
        </section>
    )
}
