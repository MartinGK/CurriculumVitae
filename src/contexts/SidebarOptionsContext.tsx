// SidebarOptions.tsx
import { createContext, useState, ReactNode } from "react";
import { NavOptions } from "@constants";

interface ISidebarOptions {
  open: boolean;
  itemSelected: string;
  setSelectedItem: (item: string) => void;
}

export const SidebarOptionsContext = createContext<ISidebarOptions>({
  open: true,
  itemSelected: NavOptions.SKILLS,
  setSelectedItem: () => {},
});

interface ISidebarOptionsProviderProps {
  children: ReactNode;
}

export const SidebarOptionsProvider = ({
  children,
}: ISidebarOptionsProviderProps) => {
  const [itemSelected, setItemSelected] = useState(NavOptions.SKILLS);
  const [open, setOpen] = useState(true);
  const value: ISidebarOptions = {
    open: true,
    itemSelected: itemSelected,
    setSelectedItem: setItemSelected,
  };
  return (
    <SidebarOptionsContext.Provider value={value}>{children}</SidebarOptionsContext.Provider>
  );
};
