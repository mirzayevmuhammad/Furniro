import { createBrowserRouter } from "react-router-dom";
import AppWrapperLayout from "../layout/AppWrapperLayout";
import RootLayout from "../layout/RootLayout";
import HomePage from "../page/HomePage";
import ShopPage from "../page/ShopPage";
import AboutPage from "../page/AboutPage";
import ContactPage from "../page/ContactPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "/Shop",
            element: <ShopPage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/contact",
            element: <ContactPage />,
          },
        ],
      },
    ],
  },
]);
