import { useState, useEffect } from 'react';
import './HeroSection.css'; 
import suraj from "../assets/Images/surajImage.jpg"
import { Link } from 'react-scroll'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "Hi, I am Suraj Sharma",
    "I am a Web Developer",
    "I am a Frontend Developer",
    "I am a Coder",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <> 
      <div className="hero-container" id="home">
      <div className="hero-left">
      <img src={suraj} alt="Suraj Sharma" className="hero-image" />
      <marquee  behavior="scroll"  direction="left"  scrollamount="5"
      > 
      Hi! I am Suraj Sharma, a Frontend React Developer.
    </marquee>
      </div>
      <div className="hero-right">
        <h1 className="hero-heading"><i>Welcome to My Portfolio</i></h1>
        <b className="running-text">{texts[index]}</b>
        <p className="hero-description">    
          I specialize in building interactive websites and applications. Let's create something amazing together!
        </p>
        <Link 
          to="contact"
          smooth={true} 
          duration={1000} 
          className="cta-button"
        >
          Contact Me
        </Link>
            <div className="social-links-1">
              <a  data-aos="fade-up" href="https://www.instagram.com/surajsharma_192" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                <FaInstagram />
              </a>
              <a data-aos="fade-up" href="https://www.facebook.com/share/18jvmWwTiC/" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                <FaFacebookF />
              </a>
              <a data-aos="fade-up" href="https://www.linkedin.com/surajsharma916" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                <FaLinkedinIn />
              </a>
              <a data-aos="fade-up" href="https://github.com/suraj5620" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                <FaGithub />
              </a>
            </div>
      </div>
    </div>
    </>

  );
};

export default HeroSection;
