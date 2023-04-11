import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stars from 'components/Stars'
import Footer from 'components/Footer'
import Experiences from 'components/Experiences'
import AboutMe from 'components/AboutMe'
import { skills } from '@constants';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin GK</title>
        <meta name="description" content="Martin Gainza Koulaksezian CV" />
        <link rel="icon" href="/images/FotoPerfil.jpg" />
      </Head>

      <main className="flex p-5">
        <article className="flex items-center bg-white flex-col text-2xl text-black font-bold py-10 rounded">
          <Image alt="Imagen pendiente" src="/images/FotoPerfil.jpg" width={250} height={250} quality={100} className="border-orange-500 border-4 rounded-full" />
          <h2 className="text-3xl">Martin Gainza Koulaksezian</h2>
          <h3>ReactJS Developer</h3>
          <div>
            <h4>Skills</h4>
            <ul className="px-20 font-normal">
              {skills.map(skill => {
                return (
                  <li className="flex " key={skill.skill}>
                    <span className="bg-gray-200 px-5 w-72 flex justify-center mr-10">{skill.skill}</span>
                    <div className="flex w-32">
                      <Stars q={skill.q} />
                    </div>
                  </li>
                )
              })
              }

              <li className="flex " >
                <span className="bg-gray-200 px-5 w-72 flex justify-center items-center mr-10">English</span>
                <span className="flex w-32 text-base text-bold">
                  Upper-Intermediate
                </span>
              </li>
            </ul>
          </div>
        </article>
        <section className={styles.rightSection}>
          <AboutMe />
          <Experiences />
        </section>
      </main>
      <Footer />
    </div>
  )
}
