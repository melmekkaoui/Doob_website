import React from 'react';
import { useState } from "react";
import "./navbar.css";

import images from '../../assets/images'

function Navbar() {
    const [toggleMenu,setToggleMenu]= useState(false) 
    return (
    
    
    
        <nav className="navbar__top">
            <div className="container row">
                <div className="logo">
                        <img src={images.logo} />
                    </div>
                {toggleMenu 
                
                    ? <ul className="navbar__menu active">
                            <div className="navbar__start">
                            <li><a href="#">Home.</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact us</a></li>
                            </div>
                            <div className="navbar__end">
                                <li><a href="#">EN<i className="fa-solid fa-caret-down"></i></a></li>
                                <li className="featured-btn"><a href="#">Contact Us <i className="fa-solid fa-arrow-right-long"></i></a></li>
                            </div>
                      </ul>

                    : <ul className="navbar__menu">
                            <div className="navbar__start">
                            <li><a href="#">Home.</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact us</a></li>
                            </div>
                            <div className="navbar__end">
                                <li><a href="#">EN<i className="fa-solid fa-caret-down"></i></a></li>
                                <li className="featured-btn"><a href="#">Contact Us <i className="fa-solid fa-arrow-right-long"></i></a></li>
                            </div>
                        </ul>
                
                
                
                }
                
                <i className="collapse-btn fa-solid fa-list-ul" onClick={()=>setToggleMenu(!toggleMenu)}></i>
        </div>
         
        </nav>
    )
}

export default Navbar
