import React from 'react'
import './header.css'

import images from '../../assets/images'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__intro">
                        <h1 className="header__intro_title">The Spirit Of <br/>Digital Agency</h1>
                        <p className="header__intro_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi, </p>
                        <a href="#" className="main_btn header__btn">More About us</a>
                        <a href="#" className="Secondary-btn header_btn">More About us</a>
                    </div>
                    <div className="header__img">
                        <img src={images.headerImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
