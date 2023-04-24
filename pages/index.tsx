import Head from "next/head";
import Skills from "components/Skills";
import Experiences from "components/Experiences";
import AboutMe from "components/AboutMe";
import { SideBar } from "components/SideBar";
import { SidebarOptionsProvider } from "contexts/SidebarOptionsContext";
import Navbar from "components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Martin GK</title>
        <meta name="description" content="Martin Gainza Koulaksezian CV" />
        <link rel="icon" href="/images/FotoPerfil.jpg" />
      </Head>
      <SidebarOptionsProvider>
        {/* <SideBar /> */}

        <main className="bg-background-1 flex justify-center overflow-hidden">
          <Skills/>
          <AboutMe />
          <Experiences />
        </main>
        <Navbar />
      </SidebarOptionsProvider>
    </div>
  );
}
