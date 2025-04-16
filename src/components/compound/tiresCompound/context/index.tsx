"use client";
import { createContext, useContext } from "react";
import { IFilterableTires } from "../interfaces";

export const FilterableTireContext = createContext<
  IFilterableTires | undefined
>(undefined);

export function useContextFilterableTires() {
  const context = useContext(FilterableTireContext);
  if (!context) {
    throw new Error("useContextFilterableTires must be used within a Provider");
  }
  return context;
}
