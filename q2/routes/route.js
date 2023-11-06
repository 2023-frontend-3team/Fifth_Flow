import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import SubPage from "../pages/sub";
import ThirdPage from "../pages/third";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: "/sub",
    element: <SubPage />,
  },
  {
    path: "/third",
    element: <ThirdPage />,
  },
]);

export default router;
