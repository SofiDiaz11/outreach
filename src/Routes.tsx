import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/organisms/Home/Home";
import Contact from "./components/organisms/Contact/Contact";
import WaterSportRetreats from "./components/organisms/WaterSportsRetreats/WaterSportRetreats";
import MountainRetreats from "./components/organisms/MountainRetreats/MountainRetreats";
import Layout from "./components/atoms/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      // Dynamic route to handle sections of WaterSportRetreats
      {
        path: "/retreats/watersport/:section?",
        element: <WaterSportRetreats />,
      },
      { path: "/wellness-bacalar-mexico/:section?", element: <MountainRetreats /> },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
