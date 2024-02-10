import { createContext, useContext } from "react";

interface ComponentsProps {
  setPage: (page: number) => void;
  page: number;
  font: number;
  color: number;
  pomodoro: number;
  setPomodoro: (pomodoro: number) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
