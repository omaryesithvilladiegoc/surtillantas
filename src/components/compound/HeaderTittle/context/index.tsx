import { createContext, useContext } from "react";
import { HeaderTittleOptions } from "../interfaces";

export const HeaderTittleContext = createContext<
  HeaderTittleOptions | undefined
>(undefined);

export const useHeaderTittleContext = () => {
  const context = useContext(HeaderTittleContext);
  if (context === undefined) {
    throw new Error(
      "useHeaderTittleContext must be used within a HeaderTittleContext"
    );
  }
  return context;
};
