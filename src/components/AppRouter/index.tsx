import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "../../config/routes";

import App from "../../App";
import Chat from "../../pages/Chat";
import MainLayout from "../../layouts/Main";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: APP_ROUTES.home,
        element: <App />,
      },
      {
        path: APP_ROUTES.chat,
        element: <Chat />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
