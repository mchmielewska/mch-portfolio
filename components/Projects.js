import GithubLink from './GithubLink';
import DemoLink from './DemoLink';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="single-project">
          <h3>Weather App</h3>
          <div className="images">
            <img src="/weather_app1.png"></img>
            <img src="/weather_app2.png"></img>
          </div>
          <div className="details">
            <p>
              A responsive weather website that displays both current weather as
              well as short term forecast.
            </p>

            <p>Highlights</p>
            <ul>
              <li>
                dynamically adjusting gradient background to current time of day
                in real time
              </li>
              <li>timezone calculations to better handle summer/winter time</li>
              <li>integrated browser geolocation for better UX</li>
            </ul>
            <p>Tech:</p>
            <ul className="tech">
              <li>javascript</li>
              <li>css</li>
              <li>html</li>
              <li>git</li>
            </ul>
            <div className="links">
              <GithubLink path="https://github.com/mchmielewska/weather-app" />
              <DemoLink path="https://moon-weatherapp.netlify.app/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
