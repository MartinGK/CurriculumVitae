import { ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

type Props = {
    href: string;
    label: string;
    icon: ReactNode;
    selected: boolean;
}

export default function BottomNavButton({ href, label, icon, selected }: Props) {
  return (
    <Link href={href}
      aria-label={`link to ${label}`}
    >
      <button className={classNames(
        "flex gap-1 whitespace-nowrap border-b-2 box-border p-4 border-transparent outline-none transition-all duration-75",
        { "text-red-600 border-t-red-600": selected }
      )} title={label}>
        {icon}
      </button>
    </Link >
  );
}