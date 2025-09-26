import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Providers from "./providers/provider";
import { routes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouterProvider router={routes} />
  </Providers>
);
