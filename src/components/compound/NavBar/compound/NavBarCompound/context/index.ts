import { createContext, useContext } from "react";
import { NavBarOptions } from "../interfaces";

export const NavBarConext = createContext<NavBarOptions | undefined>(undefined);

export const useNavBarContext = () => {
  const context = useContext(NavBarConext);
  if (!context) {
    throw new Error("useNavBarContext must be used within a NavBarProvider");
  }
  return context;
};
