import React from 'react'

import './feature.css'

import FeatureBox from '../../component/feature/FeatureBox'

function Feature() {
    return (
        <div className="feature">
            <div className="container">
                <div className="feature__content">
                    <div className="feature__info">
                        <h2 className="feature__title">Anything you <br/> need,we've<br/>got you covered</h2>
                        <a className="main_btn" href="#">Get in Touch</a>
                    </div>
                    <FeatureBox icon="fa-solid fa-envelope-circle-check" title="Web & graphic Design" />
                    <FeatureBox icon="fa-solid fa-laptop-code" title="Web & graphic Design" />
                </div>
            </div>
        </div>
    )
}

export default Feature
