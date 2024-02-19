import { ReactNode } from "react";

type Props = {
    title: string | ReactNode;
    content: string | ReactNode;
}

export default function Card({ title, content }: Props) {
  return (
    <div className="!bg-white !bg-opacity-10 md:min-h-[22rem] md:min-w-24 p-5">
      <h1 className="font-bold md:text-2xl md:min-h-[4rem]">
        {title}
      </h1>
      <p className="pt-2 md:text-md">{content}</p>
    </div>
  );
}