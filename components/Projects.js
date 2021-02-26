import GithubLink from './GithubLink';
import DemoLink from './DemoLink';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="single-project">
          <h3><a href="https://fluffy-carnival-app.herokuapp.com/">Fluffy Carnival</a></h3>
          <div className="images">
            <div className="right-align">
              <img src="/fluffy_1.webp" className="project-image left" alt="fluffy carnival front page"></img>
            </div>
            <div className="left-align">
              <img src="/fluffy_2.webp" className="project-image right" alt="fluffy carnival - single post"></img>
            </div>
          </div>
          <div className="details">
            <p>
              A social network app, build using React.js for the frontend and
              Node.js for backend.
              <br></br>
              Some of the features include: managing friends, managing the
              personal profile, adding and editing posts with images, recent
              posts feed, liking and commenting, privacy controls, search
              function
            </p>

            <p>Tech:</p>
            <ul className="tech">
              <li>react.js</li>
              <li>redux</li>
              <li>css</li>
              <li>html</li>
              <li>node.js</li>
              <li>express.js</li>
              <li>mongoDB</li>
            </ul>
            <div className="links">
              <GithubLink path="https://github.com/mchmielewska/fluffy-carnival" projectName="Fluffy Carnival"/>
              <DemoLink path="https://fluffy-carnival-app.herokuapp.com/" projectName="Fluffy Carnival"/>
            </div>
          </div>
        </div>

        <div className="beige">
          <div className="single-project">
            <h3><a href="https://github.com/mchmielewska/url-shortener">Url Shortener</a></h3>

            <div className="details">
              <p>
                A Node.js/Express API to shorten urls provided by user. The user
                inputs a long (full) URL and optionally a short identifier, and
                a shorter version of the URL that redirects to the full url is
                returned.
              </p>

              <p>Tech:</p>
              <ul className="tech">
                <li>node.js</li>
                <li>express.js</li>
                <li>knex</li>
                <li>SQLite</li>
                <li>mocha & chai</li>
              </ul>
              <div className="links">
                <GithubLink path="https://github.com/mchmielewska/url-shortener" projectName="Url shortener"/>
              </div>
            </div>
          </div>
        </div>

        <div className="single-project">
          <h3><a href="https://star-wars-moon.netlify.app/">Star Wars App</a></h3>
          <div className="images">
            <div className="right-align">
              <img src="/starwars_1.webp" className="project-image left" alt="star wars app - front page"></img>
            </div>
            <div className="left-align">
              <img src="/starwars_2.webp" className="project-image right" alt="star wars app - one of the views"></img>
            </div>
          </div>
          <div className="details">
            <p>
              A responsive React.js app that displays Star Wars films and
              characters short descriptions. Integrated with an external API,
              data is downloaded only on the initial page load and retrieved
              from local storage.
            </p>

            <p>Tech:</p>
            <ul className="tech">
              <li>react.js</li>
              <li>redux</li>
              <li>css</li>
              <li>html</li>
              <li>jest & enzyme</li>
            </ul>
            <div className="links">
              <GithubLink path="https://github.com/mchmielewska/star_wars_app"  projectName="Star Wars App"/>
              <DemoLink path="https://star-wars-moon.netlify.app/"  projectName="Star Wars App"/>
            </div>
          </div>
        </div>

        <div className="light">
          <div className="single-project">
            <h3><a href="https://moon-weatherapp.netlify.app/">Weather App</a></h3>
            <div className="images">
              <div className="right-align">
                <img
                  src="/weather_app1.webp"
                  className="project-image left"
                  alt="weather app - main view"
                ></img>
              </div>
              <div className="left-align">
                <img
                  src="/weather_app2.webp"
                  className="project-image right"
                  alt="weather app - details"
                ></img>
              </div>
            </div>
            <div className="details">
              <p>
                A responsive weather website that displays both current weather
                as well as short term forecast, inegrated with external API and
                browser geolocation. Some of the highlights include dynamically
                adjusting gradient background to current time of day in real
                time, timezone calculations to better handle summer/winter time
              </p>

              <p>Tech:</p>
              <ul className="tech">
                <li>javascript</li>
                <li>css</li>
                <li>html</li>
              </ul>
              <div className="links">
                <GithubLink path="https://github.com/mchmielewska/weather-app"  projectName="Weather App"/>
                <DemoLink path="https://moon-weatherapp.netlify.app/"  projectName="Weather App"/>
              </div>
            </div>
          </div>
        </div>

        <div className="light-bg">
          <div className="single-project">
            <h3><a href="https://github.com/mchmielewska/IAIWebcamp-shop">E-commerce site</a></h3>
            <div className="images">
              <div className="right-align">
                <img src="/shop_1.webp" className="project-image left" alt="e-commerce project - front page"></img>
              </div>
              <div className="left-align">
                <img src="/shop_2.webp" className="project-image right" alt="e-commerce project - product page"></img>
              </div>
            </div>
            <div className="details">
              <p>
                A responsive project for e-commerce site, based on AdobeXD
                project. Slick library for sliders
              </p>
              <p>Tech:</p>
              <ul className="tech">
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
              </ul>
              <div className="links">
                <GithubLink path="https://github.com/mchmielewska/IAIWebcamp-shop"  projectName="E-commerce site"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
