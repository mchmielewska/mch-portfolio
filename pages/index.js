import Head from 'next/head';
import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monika Chmielewska - software developer</title>
      </Head>
      <div>
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </>
  );
}
