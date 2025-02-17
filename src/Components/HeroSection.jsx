import { useState, useEffect } from 'react';
import './HeroSection.css'; // Style file
import suraj from "../assets/Images/surajImage.jpg"
import { Link } from 'react-scroll'

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "Hi, I am Suraj Sharma",
    "I am a Web Developer",
    "I am a Frontend Developer",
    "I am a Coder"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container" id="home">
      <div className="hero-left">
        <img src={suraj} alt="Suraj Sharma" className="hero-image" />
      </div>
      <div className="hero-right">
        <h1 className="hero-heading"><i>Welcome to My Portfolio</i></h1>
        <b className="running-text">{texts[index]}</b>
        <p className="hero-description">
          I specialize in building interactive websites and applications. Let's create something amazing together!
        </p>
            


        <Link 
          to="contact" // ID of the contact section
          smooth={true} // Enable smooth scrolling
          duration={1000} // Duration of the scroll
          className="cta-button"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
