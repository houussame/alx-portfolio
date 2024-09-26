import { createBrowserRouter } from "react-router-dom";

import FullPageLandingComponent from "./components/views/full-page-landing";
import MyWorksPage from "./components/views/my-works-page";
import Layouts from "./components/layouts/layouts";
import ContactPage from "./components/views/contact-page";
import NotFoundPage from "./components/views/not-found-page";

const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <FullPageLandingComponent />,
      },
      {
        path: "myworks",
        element: <MyWorksPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
