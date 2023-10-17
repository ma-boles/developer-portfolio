import React from "react";
import "../styles/About.css"
import html from "../images/HTML5_Badge.png";
import css from "../images/CSS3_logo.png";
import javascript from "../images/JavaScript-logo.png";
import react from "../images/react-logo.jpg"

export default function About () {
    return (
        <section className="about" id="about">
          <article className="about--details">
                <p className="p--about">I started on my coding journey November 2022. I've been studying and honing my skills ever since.
                Before I started on this path, I spent 6 years living and working in Japan. I enjoyed meeting new people, experiencing the culture, learning the language, eating delicious food, and I also picked up DJing as a fun hobby!
                </p>
            </article>

                <div className="skills--section">
                <h2 >Skills:</h2>

                    <div className="logo--container">
                        <div className="html">
                        <li className="li--skills">
                            <img className="skills--logo" src={html} alt="html logo"></img>
                            <p className="p--skills">HTML</p>
                            </li>  
                        </div>

                        <div className="css">
                        <li className="li--skills">
                            <img className="skills--logo" src={css} alt="css logo"></img>
                            <p className="p--skills">CSS</p>
                        </li>
                        </div>

                        <div className="javascript">
                        <li className="li--skills">
                            <img className="skills--logo" src={javascript}  alt="JavaScript logo"></img>
                            <p className="p--skills">JavaScript</p>
                        </li>
                        </div>
                            
                        <div className="react">
                        <li className="li--skills">
                            <img className="skills--logo" src={react} alt="react logo"></img>
                            <p className="p--skills">React</p>
                        </li>
                        </div>
                    </div>
            </div>
        </section>
        
    )
}