import "./About.css";
import profilePic from "../assets/Images/suraj.jpg"; // Replace with your image path

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left"  data-aos="fade-up-right"
     >
          <img src={profilePic} alt="Profile" className="about-image" />
        </div>
        <div className="about-right" data-aos="fade-left"
    >
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
          Hello! I'm Suraj Sharma, a passionate Frontend Developer with hands-on experience in building interactive, responsive, and user-friendly websites. Currently, I am an intern at ASV Consulting Services Pvt. Ltd., where I am honing my skills in frontend development by working on real-world projects and collaborating with a dynamic team of developers.
          </p>
          <div className="about-skills">
            <h3>Technologies I Use</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
