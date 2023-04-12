import Image from "next/image";
import Stars from 'components/Stars'
import { skills } from '@constants';

const Skills = () => {
  return (
    <article className="flex flex-col items-center rounded bg-card-1 py-10 text-xl font-bold text-black">
      <Image
        alt="Imagen pendiente"
        src="/images/FotoPerfil.jpg"
        width={200}
        height={200}
        quality={100}
        className="rounded-full border-4 border-primary-1"
      />
      <h2 className="text-2xl">Martin Gainza Koulaksezian</h2>
      <h3>ReactJS Developer</h3>
      <div>
        <ul className="px-10 pt-4 font-normal">
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
