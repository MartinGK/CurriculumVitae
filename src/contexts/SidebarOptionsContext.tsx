// sidebarOptions.tsx
import { createContext, ReactNode } from "react";
import { SidebarOptions } from "store/sidebarOptions";

export const SidebarOptionsContext = createContext<SidebarOptions>(null);
