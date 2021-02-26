import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monika Chmielewska - software developer</title>
      </Head>
      <div className="contact-section">
        <ContactForm />
      </div>
    </>
  );
}
