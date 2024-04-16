import Devices from "./pages/devices/Devices.tsx";
import App from "./App.tsx";
import RoadMap from "./pages/roadMap/RoadMap.tsx";
import User from "./pages/user/User.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "user",
    element: (
      <App>
        <User />
      </App>
    ),
  },
  {
    path: "devices",
    element: (
      <App>
        <Devices />
      </App>
    ),
  },
  {
    path: "devices/id/road-map",
    element: (
      <App>
        <RoadMap />
      </App>
    ),
  },
  {
    path: "progress",
    element: <App></App>,
  },
  {
    path: "billing",
    element: <App></App>,
  },
  {
    path: "contact",
    element: <App></App>,
  },
]);