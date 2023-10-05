import React from "react";
import "../styles/Contact.css";
import github2 from "../images/square-github.svg";
import linkedin2 from "../images/linkedin.svg";
import ig from "../images/instagram.svg";

export default function Footer() {
    return (
        <section className="footer">
            <hr className="hr--contact" />
            <div className="footer--content">

            <div className="socialMedia">
            <p className="copyright--contact">&copy; 2023 Mary Boles</p>

                    <a href="https://github.com/ma-boles"><img src={github2} className="img--contact"></img></a>
                    <a href="https://www.linkedin.com/in/mary-boles/"><img src={linkedin2} className="img--contact"></img></a>
                    <a href="https://www.instagram.com/mab.codes/"><img src={ig} className="img--contact"></img></a>

                </div>
            </div>
        </section>
    )
}