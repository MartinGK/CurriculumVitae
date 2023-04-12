import Pill from "components/Pill";
import { experiences } from "@constants";

const Experiences = () => {
  return (
    <div className="m-10 rounded bg-white p-5 text-black">
      <h1 className="text-3xl">Experiences</h1>
      <div className="mt-5 flex">
        <div className="w-full">
          {experiences.map((exp) => (
            <Pill
              key={exp.title}
              title={exp.title}
              description={exp.description}
              from={exp.from}
              to={exp.to}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
