import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monika Chmielewska - software developer</title>
      </Head>
      <div>
        <div className="container welcome-section"></div>
        <div className="container about-section">
          <div className="circle">
            <h2>
            Hi! I'm
            <br>
            </br> 
            Monika</h2>
            <div className="description">
            <p>an aspiring full-stack developer, based in Munich</p>
            </div>
          </div>
          </div>
        <div className="container projects-section">
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
        </div>
      </div>
    </>
  );
}
