import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-title">
                    <h3>CONTACT US</h3>
                    <h2>Get in Touch</h2>
                </div>
                <form>
                    <div className="forms">
                        <input type="text" placeholder="Your Email" />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <textarea>
                        Your Message Here ...
                    </textarea>
                    <div className="form-btn">
                        <button className="contact-btn" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
