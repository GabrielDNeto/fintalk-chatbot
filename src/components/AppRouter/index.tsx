import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "../../config/routes";

import App from "../../App";
import Chatbot from "../../pages/Chatbot";
import MainLayout from "../../layouts/Main";
import { ChatContextProvider } from "../../contexts/Chat";

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
        element: (
          <ChatContextProvider>
            <Chatbot />
          </ChatContextProvider>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
