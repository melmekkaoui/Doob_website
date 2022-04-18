import React from 'react'
import GalleryBox from '../../component/gallerybox/GalleryBox'


import images from '../../assets/images'

import './gallery.css'

function Gallery() {
    return (
        <div className="gallery">
            <div className="container">
                <div className="head-gallery">
                    <h2 className="gallery-title">See some of our <br/>Creative work.</h2>
                    <span className="arrows">
                        <i className="arrow-small fa-solid fa-arrow-left"></i> <a href="#"><i className="arrow-long fa-solid fa-arrow-right-long"></i></a>
                    </span>
                </div>
                <div className="gallery-content">
                    <GalleryBox image={images.graphicD1} />
                    <GalleryBox image={images.graphicD2} />
                    <GalleryBox image={images.Uiux} />
                    <GalleryBox image={images.Uiux2} />
                    <GalleryBox image={images.Wordpress} />
                    <GalleryBox image={images.Wordpress2} />
                    
                </div>
                <div className="footer-gallery">
                    <a href="#" className="gallery-btn">See More Of These.</a>
                </div>
            </div>
        </div>
    )
}

export default Gallery
