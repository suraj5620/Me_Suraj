import "./Skill.css";
import image5 from "../assets/Images/html.png";
import image6 from "../assets/Images/css.png";
import image7 from "../assets/Images/javascript.jpg";
import image8 from "../assets/Images/next.jpg";
import image9 from "../assets/Images/react.png";
import image10 from "../assets/Images/sql.jpg";
import image11 from "../assets/Images/Tailwind.png";
import image12 from "../assets/Images/express.png";
import image13 from "../assets/Images/mongo.png";

const Skill = () => {
  const skills = [
    { image: image5, name: "HTML" },
    { image: image6, name: "CSS" },
    { image: image7, name: "JavaScript" },
    { image: image11, name: "Tailwind CSS" },
    { image: image10, name: "SQL" },
    { image: image9, name: "React" },
    { image: image8, name: "Next.js" },
    { image: image13, name: "MongoDB" },
    { image: image12, name: "Express.js" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      >
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
