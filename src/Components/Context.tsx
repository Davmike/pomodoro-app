import { createContext, useContext } from "react";

interface ComponentsProps {
  page: number;
  setPage: (page: number) => void;
  menu: boolean;
  setMenu: (menu: boolean) => void;
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
  timerValue: number;
  setTimerValue: (timerValue: number) => void;
  longTimerValue: number;
  setLongTimerValue: (longTimerValue: number) => void;
  shortTimerValue: number;
  setShortTimerValue: (shortTimerValue: number) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
