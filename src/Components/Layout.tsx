import Header from "./Header";
import { Outlet } from "react-router-dom";
import Pomodoro from "./Pomodoro";

function Layout() {
  return (
    <div>
      <Header />
      <Pomodoro />
      <Outlet />
    </div>
  );
}

export default Layout;
