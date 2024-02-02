import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyContext } from "./Components/Context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);

  return (
    <>
      <MyContext.Provider value={{}}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
