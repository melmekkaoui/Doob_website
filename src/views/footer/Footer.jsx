import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="container footer-content">
                <h3 className="siteName">DOOB</h3>
                <h2>CREATIVITY ABOVE</h2>
                <ul>
                    <li><a href="">Home.</a></li>
                    <li><a href="">About us.</a></li>
                    <li><a href="">Portfolio.</a></li>
                    <li><a href="">Blog.</a></li>
                    <li><a href="">Contact us.</a></li>
                </ul>
                <span className="copy-rihgt"> &#169;2019 - Doob,All right Reserved</span>
                <br/>
                <span className="icons"><i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-twitter"></i> <i className="fa-solid fa-basketball"></i></span>
            </div>
        </div>
    )
}

export default Footer
