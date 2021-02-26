import SocialIcons from './SocialIcons';

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="about-description">
          <p>
            I'm an aspiring developer with first technical experience at
            international companies. I have been improving my coding skills,
            both front- and backend, for around 2 years and now I'm ready to
            start coding professionally. I initially started with bootcamps and
            workshops. I've been intensely coding over the last 4 months and
            learning about full stack dev and cloud integrations (e.g.
            deployments).
          </p>
          <p>
            Over the course of my career so far I have realized that I enjoy
            solving problems in a way that uses both creative and logical
            skills. I have discovered that coding fulfils this role for me.
          </p>
          <p>Technologies I've been working with recently:</p>
          <ul className="tech">
            <li>javascript</li>
            <li>react</li>
            <li>redux</li>
            <li>next.js</li>
            <li>node.js</li>
            <li>express.js</li>
            <li>mongoDB</li>
            <li>html</li>
            <li>css</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/profile.jpg" className="profile-image" alt="profile image" />
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default AboutSection;
