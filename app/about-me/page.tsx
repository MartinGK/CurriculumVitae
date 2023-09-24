import Image from "next/image";
import Highlight from "../components/Highlight";
import { BsGithub, BsStackOverflow, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import HighlightText from "../components/HighlightText";

export default function AboutMe() {
  return (
    <div className="overflow-auto px-5 pt-24 md:flex md:px-5 w-full md:pt-16">
      <div className="md:w-1/4">
        <Image
          alt="Foto perfil"
          src="/images/FotoPerfil-512x512.jpeg"
          priority={true}
          width={512}
          height={512}
          quality={100}
          className="mx-auto mb-8 rounded-full border-4 border-red"
        />

        <div className="justify-between hidden md:flex">
          <Link href="https://github.com/MartinGK" target="__blank" aria-label="github">
            <BsGithub className="ml-4 h-8 w-8 text-red" />
          </Link>
          <Link
            href="https://stackoverflow.com/users/12172697/martin-gainza-koulaksezian"
            target="__blank"
            aria-label="stack overflow"
          >
            <BsStackOverflow className="h-8 w-8 text-red" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/martin-gainza-koulaksezian/"
            target="__blank"
            aria-label="linkedin"
          >
            <BsLinkedin className="mr-4 h-8 w-8 text-red" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:w-3/4 md:px-5">
        <div className="flex justify-center pt-5 md:px-5">
          <div className="w-5/8">
            <p className="text-base md:text-xl">
              <HighlightText text={`Hi! [I'm Martin], I'm from Argentina. I'm [an experienced web developer.] I&apos;m passionate about technology and I'm passionate about technology and books; I'm [always looking for new challenges.] When I had to take a fullstack profile I usually used the MERN combo. I'm a goal-oriented team player who enjoys learning new tech skills and keeping my team and myself up to date with the latest trends. I love working in teams and I believe I have the right set of soft skills to balance my technical skills and bring value to the projects I'm entrusted with.`}/>
              {/* Hi! <Highlight>I&apos;m Martin</Highlight>, I&apos;m from
                Argentina. I&apos;m{" "}
              <Highlight>an experienced developer in ReactJS.</Highlight>{" "}
                I&apos;m passionate about technology and I&apos;m{" "}
              <Highlight>always looking for new challenges.</Highlight> When I
                had to take a fullstack profile I usually used the MERN combo.
                I&apos;m a goal-oriented team player who enjoys learning new
                tech skills and keeping my team and myself up to date with the
                latest trends. I love working in teams and I believe I have the
                right set of soft skills to balance my technical skills and
                bring value to the projects I&apos;m entrusted with. */}
            </p>
          </div>
        </div>
        <div className="flex justify-between pb-2 pt-10 md:hidden">
          <Link href="https://github.com/MartinGK" target="__blank" aria-label="github">
            <BsGithub className="ml-4 h-8 w-8 text-red" />
          </Link>
          <Link
            href="https://stackoverflow.com/users/12172697/martin-gainza-koulaksezian"
            target="__blank" aria-label="stack overflow"
          >
            <BsStackOverflow className="h-8 w-8 text-red" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/martin-gainza-koulaksezian/"
            target="__blank" aria-label="linkedin"
          >
            <BsLinkedin className="mr-4 h-8 w-8 text-red" />
          </Link>
        </div>
      </div>
    </div>
  );
};
