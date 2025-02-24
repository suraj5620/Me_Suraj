import "./Project.css";
import image2 from "../assets/Images/PasswordGenerator.png";
import image3 from "../assets/Images/weatherImage.webp";
import image4 from "../assets/Images/amazon.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: image3,
      title: "Weather App",
      description:
        "A weather forecasting app that provides real-time weather updates for your city.",
      link: "https://github.com/suraj5620/Weather_App",
    },
    {
      id: 2,
      image: image2,
      title: "Password Generator",
      description:
      "A simple tool that generates secure, random passwords with customizable.",
      link: "https://github.com/suraj5620/PasswordGenerator",
    },
    {
      id: 3,
      image: image4,
      title: "Amazon Clone",
      description:
        "This project is an e-commerce platform inspired by Amazon.",
      link: "https://github.com/suraj5620/AmazonClone",
    },
  ];

  return (
    <section className="project-section" id="projects">
      <div className="section-title">
        <h2>My Projects</h2>
        <p>Here are some of the projects I have worked on:</p>
      </div>

      <div className="project" data-aos="zoom-in">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
           
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
