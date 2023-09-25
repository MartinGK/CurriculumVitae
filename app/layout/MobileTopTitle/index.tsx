"use client";
import { NavOptions, NavOptionsIDsValues } from "@constants";
import { useSelectedLayoutSegment } from "next/navigation";
import Divider from "../../components/Divider";

export default function MobileTopTitle() {
  const segment = useSelectedLayoutSegment();
  const title: NavOptionsIDsValues = NavOptions.getOptionIDBySegment(segment);

  return (
    <div className="h-18 !fixed z-20 w-full bg-black pt-6 md:!hidden">
      <h1 className="pb-2 pl-8 text-3xl">{title}</h1>
      <Divider />
    </div>
  );
}