import { options } from "../types";

export interface NavigationBarOptions {
  options: options;
}

export interface NavigationBarProps {
  options: options;
  children: React.ReactNode;
}
