import React from 'react'
import images from '../../assets/images'


import './about.css'

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="content">
                    <div className="about-image">
                        <img src={images.Illustration} alt=""/>
                    </div>
                    <div className="about-info">
                        <h3>OUR COMPANY</h3>
                        <h2>Some Fine <br/>Words About us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ipsam illo? Placeat delectus iste labore repellat!<br/>Lorem ipsum dolor sit amet consectetur.</p>
                        <i className="arrow-small fa-solid fa-arrow-left"></i> <a href="#"><i className="arrow-long fa-solid fa-arrow-right-long"></i></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
