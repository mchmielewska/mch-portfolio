import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <div className="circle">
        <div className="project-images">
          <img
            src="/weather.png"
            alt="project 1"
            className="project-image left"
          />
          <img
            src="/fluffy.png"
            alt="project 2"
            className="project-image right"
          />
        </div>
        <div className="section-title">
          <h1 className="title">Projects</h1>
          <p>Personal and commercial projects</p>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsSection;
