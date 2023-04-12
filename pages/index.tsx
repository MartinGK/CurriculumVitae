import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "components/Footer";
import Skills from "components/Skills";
import Experiences from "components/Experiences";
import AboutMe from "components/AboutMe";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin GK</title>
        <meta name="description" content="Martin Gainza Koulaksezian CV" />
        <link rel="icon" href="/images/FotoPerfil.jpg" />
      </Head>

      <main className="flex p-5 pb-28">
        <Skills />
        <section className={styles.rightSection}>
          <AboutMe />
          <Experiences />
        </section>
      </main>
      <Footer />
    </div>
  );
}
