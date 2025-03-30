import { createContext, useContext } from "react";
import { NavigationBarOptions } from "../interface";

export const NavigationBarContext = createContext<
  NavigationBarOptions | undefined
>(undefined);

export const useNavigationBarContext = function () {
  const context = useContext(NavigationBarContext);
  if (!context) throw new Error("there aren´t any context");
  return context;
};
