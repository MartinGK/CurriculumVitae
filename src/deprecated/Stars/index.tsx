import { ReactNode } from "react";
import { AiFillStar } from "react-icons/ai";

export const Stars = ({ q }) => {
  const stars: ReactNode[] = [];
  for (let i = 0; i < q; i++) {
    stars.push(<AiFillStar key={i} className="text-red" />);
  }
  while (stars.length < 5) {
    stars.push(<AiFillStar key={stars.length} className="text-gray-500" />);
  }
  return <>{stars}</>;
};

export default Stars;