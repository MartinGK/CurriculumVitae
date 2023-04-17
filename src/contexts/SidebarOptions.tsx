// SidebarOptions.ts
import { createContext, ReactNode } from "react";

interface ISidebarOptions {
  open: boolean;
  itemSelected: string;
}

export const SidebarOptions = createContext<ISidebarOptions>({
  open: true,
  itemSelected: "Skills",
});

interface ISidebarOptionsProviderProps {
  children: ReactNode;
}

export const SidebarOptionsProvider = ({
  children,
}: ISidebarOptionsProviderProps) => {
  const value: ISidebarOptions = {
    open: true,
    itemSelected: "Skills",
  };
  SidebarOptions
  return (
    <SidebarOptions.Provider value={value}>{children}</SidebarOptions.Provider>
  );
};
