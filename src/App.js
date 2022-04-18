import React from 'react'
import Navbar from './component/navbar/Navbar'
import Header from './views/header/Header'
import Feature from './views/feature/Feature'
import About from './views/about/About'
import Gallery from './views/gallery/Gallery'
import News from './views/news/News'
import Contact from './views/contact/Contact'
import Footer from './views/footer/Footer'
import './app.css'

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Feature />
            <About />
            <Gallery />
            <News />
            <Contact />
            <Footer />
        </>
    )
}

export default App
