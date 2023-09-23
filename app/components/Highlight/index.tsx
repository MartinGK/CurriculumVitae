import React from "react";

type THighlight = {
  children: string;
};

const Highlight = ({ children }: THighlight) => {
  return <span className="text-red">{children}</span>;
};

export default Highlight;
