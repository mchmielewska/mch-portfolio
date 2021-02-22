import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

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
