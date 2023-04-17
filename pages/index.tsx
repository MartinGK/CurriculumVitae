import Head from "next/head";
import Footer from "components/Footer";
import Skills from "components/Skills";
import Experiences from "components/Experiences";
import AboutMe from "components/AboutMe";
import SideBar from "components/SideBar";
import { SidebarOptionsProvider } from "contexts/SidebarOptions";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Martin GK</title>
        <meta name="description" content="Martin Gainza Koulaksezian CV" />
        <link rel="icon" href="/images/FotoPerfil.jpg" />
      </Head>
      <SidebarOptionsProvider>
        <SideBar />

        <main className="flex justify-center bg-background-1 p-5 pb-28">
          <Skills />
          {/* <AboutMe />
          <Experiences /> */}
        </main>
      </SidebarOptionsProvider>
      <Footer />
    </div>
  );
}
