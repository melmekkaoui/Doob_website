import React from 'react'

import './featurebox.css'

function FeatureBox(props) {
    return (
        <div className="feature__box">
           <i className={props.icon}></i>
           <h2 className="feature_title">{props.title}</h2>
           <p className="feature_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetucing elit.</p>
        </div>
    )
}

export default FeatureBox
