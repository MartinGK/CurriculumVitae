// SidebarOptions.tsx
import { createContext, useState, ReactNode, useCallback } from "react";
import { NavOptions, navOptionsArray } from "@constants";

interface ISidebarOptions {
  itemSelected: string;
  //eslint-disable-next-line
  setItemSelected: (item: string) => void;
  onSwipedRight: () => void;
  onSwipedLeft: () => void;
}

export const SidebarOptionsContext = createContext<ISidebarOptions>({
  itemSelected: NavOptions.SKILLS,
  setItemSelected: () => "test",
  onSwipedRight: () => "test",
  onSwipedLeft: () => "test",
});

interface ISidebarOptionsProviderProps {
  children: ReactNode;
}

export const SidebarOptionsProvider = ({
  children,
}: ISidebarOptionsProviderProps) => {
  // Crear un estado para mantener la opción de navegación actual
  const [itemSelected, setItemSelected] = useState(NavOptions.ABOUT_ME);

  const onSwipedRight = useCallback(() => {
    const currentIndex = navOptionsArray.indexOf(itemSelected);
    if (currentIndex > 0) {
      setItemSelected(navOptionsArray[currentIndex - 1]);
    }
  }, [itemSelected]);

  const onSwipedLeft = () => {
    const currentIndex = navOptionsArray.indexOf(itemSelected);
    if (currentIndex < navOptionsArray.length - 1) {
      setItemSelected(navOptionsArray[currentIndex + 1]);
    }
  };

  const value: ISidebarOptions = {
    itemSelected,
    setItemSelected,
    onSwipedRight,
    onSwipedLeft,
  };

  return (
    <SidebarOptionsContext.Provider value={value}>
      {children}
    </SidebarOptionsContext.Provider>
  );
};
