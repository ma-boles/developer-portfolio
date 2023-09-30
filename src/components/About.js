import React from "react";
import "./About.css"
import html from "./images/HTML5_Badge.png";
import css from "./images/CSS3_logo.png";
import javascript from "./images/JavaScript-logo.png";
import react from "./images/react-logo.jpg"

export default function About () {
    return (
        <div className="about">
            <p className="p--about">I started on my coding journey November 2022. I've been studying and honing my skills ever since.
            Before I started on this path, I spent 6 years living and working in Japan. I enjoyed meeting new people, experiencing the culture, learning the language, eating delicious food, and I also picked up DJing as a fun hobby!
            </p>
                <h2 className="skills--h2">SKILLS </h2>
                <div className="skills--section">


                <ul className="ul--skills">
                    <div className="html">
                    <li className="li--skills">
                        <img className="skills--logo" src={html}></img>
                        </li>
                        <p className="p--skills">HTML</p>
                    </div>

                    <div className="css">
                    <li className="li--skills">
                        <img className="skills--logo" src={css}></img>
                    </li>
                    <p className="p--skills">CSS</p>

                    </div>

                    <div className="javascript">
                    <li className="li--skills">
                        <img className="skills--logo" src={javascript}></img>
                    </li>
                    <p className="p--skills">JavaScript</p>

                    </div>

                    <div className="react">
                    <li className="li--skills">
                        <img className="skills--logo" src={react}></img>
                    </li>
                    <p className="p--skills">React</p>

                    </div>

                </ul>
            </div>
        </div>
        
    )
}