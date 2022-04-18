import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import NewsBox from '../../component/newsbox/NewsBox'


import '@splidejs/react-splide/css';
import './news.css'
function News() {
    return (
        <div className="News">
            <div className="container">
                <div className="news__title">
                    <h3>BLOG STORIES</h3>
                    <h2>Check Our News</h2>
                </div>
                <Splide aria-label="My Favorite Images"   options={ {
                                                                    rewind: true,
                                                                    arrows:false,
                                                                    pagination:false,
                                                                    gap   : '1rem',
                                                                    perPage: 3,
                                                                    perMove: 1,
                                                                    breakpoints: {
                                                                        1024: {
                                                                          perPage: 3,
                                                                         
                                                                        },
                                                                        980: {
                                                                          perPage: 2,
                                                                      
                                                                        },
                                                                        640: {
                                                                          perPage: 1,
                                                                    
                                                                        },
                                                                      },
                                                                    } }>
                    <SplideSlide>
                        <NewsBox />
                    </SplideSlide>
                    <SplideSlide>
                        <NewsBox />
                    </SplideSlide>
                    <SplideSlide>
                        <NewsBox />
                    </SplideSlide>
                    <SplideSlide>
                        <NewsBox />
                    </SplideSlide>
                    <SplideSlide>
                        <NewsBox />
                    </SplideSlide>
                    <SplideSlide>
                        <NewsBox />
                    </SplideSlide>
                </Splide>
            </div>
            
        </div>
    )
}

export default News
