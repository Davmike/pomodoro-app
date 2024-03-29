// import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyContext } from "./Components/Context";
import { useState } from "react";
import Long from "./Components/Long";
import Short from "./Components/Short";
import Pomodoro from "./Components/Pomodoro";
import Settings from "./Components/Settings";

function App() {
  const [page, setPage] = useState<number>(1);
  const [menu, setMenu] = useState<boolean>(false);
  const [pomodoro, setPomodoro] = useState<number>(15);
  const [timerValue, setTimerValue] = useState<number>(900);
  const [short, setShort] = useState<number>(5);
  const [shortTimerValue, setShortTimerValue] = useState<number>(300);
  const [long, setLong] = useState<number>(10);
  const [longTimerValue, setLongTimerValue] = useState<number>(600);
  const [font, setFont] = useState<number>(1);
  const [color, setColor] = useState<number>(1);
  const [pause, setPause] = useState<boolean>(true);
  const [result, setResult] = useState<undefined | string>("00:00");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pomodoro />,
    },
    {
      path: "/shortbreak",
      element: <Short />,
    },
    {
      path: "/longbreak",
      element: <Long />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);

  return (
    <>
      <MyContext.Provider
        value={{
          menu,
          setMenu,
          page,
          setPage,
          font,
          color,
          pomodoro,
          setPomodoro,
          short,
          setShort,
          long,
          setLong,
          pause,
          setPause,
          result,
          setResult,
          setFont,
          setColor,
          timerValue,
          setTimerValue,
          longTimerValue,
          setLongTimerValue,
          shortTimerValue,
          setShortTimerValue,
        }}
      >
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
