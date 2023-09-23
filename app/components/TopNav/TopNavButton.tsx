import { ReactNode } from "react";
import Link from 'next/link';
import classNames from "classnames";

type Props = {
    href: string;
    label: string;
    icon: ReactNode;
    selected: boolean;
}

export default function TopNavButton({ href, label, icon, selected }: Props) {
    return (
        <Link href={href}
            aria-label={label}
        >
            <button className={classNames(
                "flex gap-1 whitespace-nowrap border-b-2 box-border p-4 border-transparent outline-none transition-all duration-75",
                { "text-red-600 border-b-red-600": selected }
            )}>
                {icon}
                <span>{label}</span>
            </button>
        </Link >
    );
}