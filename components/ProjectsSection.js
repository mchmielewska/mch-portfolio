import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <div className="projects-section"  id="projects">
      <div className="circle">
        <div className="project-images">
          <img
            src="/weather.webp"
            alt="project 1"
            className="project-image left"
            alt="project section main - weather app"
          />
          <img
            src="/fluffy.webp"
            alt="project 2"
            className="project-image right"
            alt="project section main - social network app"
          />
        </div>
        <div className="section-title">
          <h2 className="title">Projects</h2>
          <p>Personal and commercial projects</p>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsSection;
