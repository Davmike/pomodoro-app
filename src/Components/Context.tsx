import { createContext, useContext } from "react";

interface ComponentsProps {
  setPage: (page: number) => void;
  page: number;
  font: number;
  setFont: (font: number) => void;
  color: number;
  setColor: (color: number) => void;
  pomodoro: number;
  setPomodoro: (pomodoro: number) => void;
  short: number;
  setShort: (short: number) => void;
  long: number;
  setLong: (long: number) => void;
  pause: boolean;
  setPause: (pause: boolean) => void;
  result: undefined | string;
  setResult: (result: undefined | string) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
