import React, { useState } from "react";
import "../styles/Contact.css";
import github2 from "../images/square-github.svg";
import linkedin2 from "../images/linkedin.svg";
import ig from "../images/instagram.svg";

export default function Contact () {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if(!formData.name.trim()) {
            newErrors.name = "* Name is required";
        }

        if(!formData.email.trim()) {
            newErrors.email = "* Email is required";
        } else if(
            !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                formData.email
            )
        ) {
            newErrors.email = "* Invalid email address";
        }

        if(!formData.message.trim()) {
            newErrors.message = "* Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "* Message should be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if(isFormValid) {
            alert("Message is sent successfully!");
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="contact--h2">Let's <strong className="h2--strong">connect!</strong></h2>
            
            <div className="socialMedia">
                    <a href="https://github.com/ma-boles"><img src={github2} className="img--contact"></img></a>
                    <a href="https://www.linkedin.com/in/mary-boles/"><img src={linkedin2} className="img--contact"></img></a>
                    <a href="https://www.instagram.com/mab.codes/"><img src={ig} className="img--contact"></img></a>
                </div>
                
            <div className="form--container">
                <form onSubmit={handleSubmit}>
                    <div className="form--group">
                        <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"/>
                        {errors.name && <p className="error">{errors.name}</p>}
                        <br/>

                        <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"/>
                        {errors.email && <p className="error">{errors.email}</p>}
                        <br/>

                        <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                        <br/>

                        <button type="submit" className="form--button">Submit</button>
                    </div>
                </form>
                <hr className="hr--contact" />
            </div>
            <p className="copyright--contact">&copy; 2023 Mary Boles</p>
        </section>

    );

}