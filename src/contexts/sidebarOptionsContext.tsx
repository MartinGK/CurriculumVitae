import { createContext, ReactNode } from "react";
import sidebarOptions, { SidebarOptions } from "store/sidebarOptions";

export const SidebarOptionsContext = createContext<SidebarOptions>(sidebarOptions);

export const SidebarOptionsProvider = ({ children }: { children: ReactNode }) => {
  return <SidebarOptionsContext.Provider value={sidebarOptions}>
    {children}
  </SidebarOptionsContext.Provider>;
};