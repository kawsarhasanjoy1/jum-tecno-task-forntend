import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MoodForm from "../pages/moods/MoodForm";
import MoodHistory from "../pages/moods/MoodHistory";
import PrivateRoute from "../protected/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "moods/create-mood",
        element: (
          <PrivateRoute>
            <MoodForm />
          </PrivateRoute>
        ),
      },
      {
        path: "moods",
        element: (
          <PrivateRoute>
            <MoodHistory />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
