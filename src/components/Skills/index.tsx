import Image from "next/image";
import Stars from 'components/Stars'
import { skills } from '@constants';

const Skills = () => {
  return (
    <article className="flex flex-col items-center rounded bg-white py-10 text-2xl font-bold text-black">
      <Image
        alt="Imagen pendiente"
        src="/images/FotoPerfil.jpg"
        width={250}
        height={250}
        quality={100}
        className="rounded-full border-4 border-orange-500"
      />
      <h2 className="text-3xl">Martin Gainza Koulaksezian</h2>
      <h3>ReactJS Developer</h3>
      <div>
        <h4>Skills</h4>
        <ul className="px-20 font-normal">
          {skills.map((skill) => {
            return (
              <li className="flex " key={skill.skill}>
                <span className="mr-10 flex w-72 justify-center bg-gray-200 px-5">
                  {skill.skill}
                </span>
                <div className="flex w-32">
                  <Stars q={skill.q} />
                </div>
              </li>
            );
          })}

          <li className="flex ">
            <span className="mr-10 flex w-72 items-center justify-center bg-gray-200 px-5">
              English
            </span>
            <span className="text-bold flex w-32 text-base">
              Upper-Intermediate
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Skills;
