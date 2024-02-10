import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyContext } from "./Components/Context";
import { useState } from "react";
import Long from "./Components/Long";
import Short from "./Components/Short";
import Pomodoro from "./Components/Pomodoro";

function App() {
  const [page, setPage] = useState<number>(1);
  // const [menu, setMenu] = useState<boolean>(false);

  const [font, setFont] = useState<number>(1);
  const [color, setColor] = useState<number>(1);
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
  ]);

  return (
    <>
      <MyContext.Provider value={{ page, setPage, font, color }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
