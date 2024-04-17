import Devices from "./pages/devices/Devices.tsx";
import App from "./App.tsx";
import Roadmap from "./pages/roadmap/Roadmap.tsx";
import User from "./pages/user/User.tsx";
import { createBrowserRouter } from "react-router-dom";
import Progress from "./pages/progress/Progress.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Billing from "./pages/billing/Billing.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <User />
      </App>
    ),
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
    path: "devices/:id/road-map",
    element: (
      <App>
        <Roadmap />
      </App>
    ),
  },
  {
    path: "progress",
    element: (
      <App>
        <Progress />
      </App>
    ),
  },
  {
    path: "billing",
    element: (
      <App>
        <Billing />
      </App>
    ),
  },
  {
    path: "contact",
    element: (
      <App>
        <Contact />
      </App>
    ),
  },
]);
