import React, { useEffect, useState } from 'react';
import './styles/Hero.css';
import { FaArrowUp } from "react-icons/fa";
import { Element } from 'react-scroll';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import './styles/Home.css'

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return(
        <div>
            {showButton && 
                <button onClick={scrollToTop} className='scroll-btn'><FaArrowUp /></button>
            }
            <Hero />
            <Element name="about"><About /></Element>
            <Element name="skills"><Skills /></Element>
            <Element name="projects"><Projects /></Element>
            <Element name="education"><Education /></Element>
            <Element name="contact"><Contact /></Element>
            <Footer />
        </div>
    );
}

export default Home;