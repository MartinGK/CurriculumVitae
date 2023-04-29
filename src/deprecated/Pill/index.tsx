import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useState } from "react";
import cx from "classnames";

type TPill = {
  title: string;
  description: string;
  from?: string;
  to?: string;
};

const Pill = ({ title, description, from, to }: TPill) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={handleShow}
      className={cx(
        "bg-primary-1 hover:bg-primary-6 focus:bg-primary-6 active:bg-primary-7 border-radius-transition mb-5 flex h-fit w-full cursor-pointer  items-center bg-secondary-1 pb-2  pr-6 pt-2.5 text-xs font-medium leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition-all duration-75 ease-linear hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
        show ? "rounded-sm bg-secondary-1" : "rounded-3xl "
      )}
    >
      <div className="min-w-fit px-2">
        <BiMinus className={cx("", show ? " h-4 w-4" : "h-0 w-0")} />
        <BsPlusLg className={cx("", show ? " h-0 w-0" : " h-4 w-4")} />
      </div>
      <div className="relative flex flex-col overflow-hidden transition-all ease-linear ">
        <h3
          className={cx(
            "relative w-fit font-bold uppercase transition-all duration-300 ease-linear",
            show ? "left-2/4 -translate-x-2/4" : "left-0"
          )}
        >
          {title}
        </h3>
        <p
          className={cx(
            "transition-all duration-150 ease-linear",
            show ? "h-100" : "h-0"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Pill;
