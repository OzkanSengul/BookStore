import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashBoard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "books/:id",
        element: <SingleBook />,
        params: (params) => {
          return {
            id: params.id,
          };
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  }
]);

export default router;
