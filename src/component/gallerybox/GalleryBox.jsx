import React from 'react'
import './galleryBox.css'

function GalleryBox(props) {
    return (
        <div className="gallery_box">
                <img src={props.image} className="image" />
                    <div className="overlay">
                        <div className="text">Awesome Work</div>
                    </div>
        </div>
    )
}

export default GalleryBox
