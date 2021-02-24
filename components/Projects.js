import GithubLink from './GithubLink';
import DemoLink from './DemoLink';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="single-project">
          <h3>Fluffy Carnival</h3>
          <div className="images">
            <img src="/fluffy_1.png"></img>
            <img src="/fluffy_2.png"></img>
          </div>
          <div className="details">
            <p>
              A social network app, build using React.js for the frontend and
              Node.js for backend.
              <br></br>
              Some of the features include: managing friends, managing the
              personal profile, adding and ediitng posts with images, recent
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
              <GithubLink path="https://github.com/mchmielewska/fluffy-carnival" />
              <DemoLink path="https://fluffy-carnival-app.herokuapp.com/" />
            </div>
          </div>
        </div>

        <div className="single-project">
          <h3>Url Shortener</h3>
          
          <div className="details">
            <p>
              A Node.js/Express API to shorten urls provided by user. The user
              inputs a long (full) URL and optionally a short identifier, and a
              shorter version of the URL that redirects to the full url is
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
              <GithubLink path="https://github.com/mchmielewska/url-shortener" />
            </div>
          </div>
        </div>

        <div className="single-project">
          <h3>Star Wars App</h3>
          <div className="images">
            <img src="/starwars_1.png"></img>
            <img src="/starwars_2.png"></img>
          </div>
          <div className="details">
            <p>
              A responsive React.js app that displays Star Wars films and
              characters short descriptions.
            </p>

            <p>Highlights</p>
            <ul>
              <li>
                integration with an external API, data is downloaded only on the
                initial page load and retrieved from local storage
              </li>
              <li>
                integration with LogRocket for collecting metrics and error
                tracking
              </li>
            </ul>
            <p>Tech:</p>
            <ul className="tech">
              <li>react.js</li>
              <li>redux</li>
              <li>css</li>
              <li>html</li>
              <li>jest & enzyme</li>
            </ul>
            <div className="links">
              <GithubLink path="https://github.com/mchmielewska/star_wars_app" />
              <DemoLink path="https://star-wars-moon.netlify.app/" />
            </div>
          </div>
        </div>

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
            </ul>
            <div className="links">
              <GithubLink path="https://github.com/mchmielewska/weather-app" />
              <DemoLink path="https://moon-weatherapp.netlify.app/" />
            </div>
          </div>
        </div>

        <div className="single-project">
          <h3>E-commerce site</h3>
          <div className="images">
            <img src="/shop_1.png"></img>
            <img src="/shop_2.png"></img>
          </div>
          <div className="details">
            <p>
              A responsive project for e-commerce site, based on AdobeXD
              project.
            </p>

            <p>Highlights</p>
            <ul>
              <li>Slick library for sliders</li>
            </ul>
            <p>Tech:</p>
            <ul className="tech">
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </ul>
            <div className="links">
              <GithubLink path="https://github.com/mchmielewska/IAIWebcamp-shop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
