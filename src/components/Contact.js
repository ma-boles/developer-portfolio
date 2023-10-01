import React from "react";
import "../styles/Contact.css";
import github2 from "../images/square-github.svg";
import linkedin2 from "../images/linkedin.svg";
import ig from "../images/instagram.svg";

export default function Contact () {

    return (

        <section className="contact" id="contact">
            <h2 className="contact--h2">Let's <strong className="h2--strong">connect!</strong></h2>

            <div className="contactCard">
            <div className="email"> 
                    <p className="p--contact">email@email.com</p>
                </div>
                <div className="socialMedia">
                    <a href="https://github.com/ma-boles"><img src={github2} className="img--contact"></img></a>
                    <a href="https://www.linkedin.com/in/mary-boles/"><img src={linkedin2} className="img--contact"></img></a>
                    <a href="https://www.instagram.com/mab.codes/"><img src={ig} className="img--contact"></img></a>
                </div>
            </div>
        </section>

    )

}