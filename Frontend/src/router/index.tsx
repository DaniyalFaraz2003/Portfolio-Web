import { useRoutes } from "react-router";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Docs from "../pages/Docs.tsx";
import Components from "../pages/Components.tsx";
import Colors from "../pages/Colors.tsx";

function Router() {
  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "docs",
          element: <Docs />,
        },
        {
          path: "docs/frame",
          element: <Components />,
        },
        {
          path: "docs/colors",
          element: <Colors />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
