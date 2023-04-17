import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const SideBar = () => {
  return (
    <div className="fixed h-screen w-10 bg-white text-black">
      <div className="flex h-10 w-full items-center justify-center border-b-2 border-primary-1">
        <GiHamburgerMenu className="pointer" />
      </div>
      <FaUser />
      <MdWork />
      <GiSkills />
    </div>
  );
};

export default SideBar;
