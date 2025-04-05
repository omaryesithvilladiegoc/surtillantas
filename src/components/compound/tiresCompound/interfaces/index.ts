import { Tire } from "../types";

export interface IProps {
  children: React.ReactNode;
  tires: Tire[];
}

export interface IFilterableTires {
  filterWord: string;
  setFilterWord: React.Dispatch<React.SetStateAction<string>>;
  tires: Tire[];
}
