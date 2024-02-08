import { createContext, useContext } from "react";

interface ComponentsProps {
  setPage: any;
  page: number;
  font: number;
  color: number;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
