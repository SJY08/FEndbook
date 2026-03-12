import HtmlCssPage from "@/pages/html-css/HtmlCssPage"
import LandingPage from "@/pages/landing/LandingPage"
import { RootLayout } from "@/shared/model/RootLayout"

import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter(
    [
        {
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <LandingPage />,
                },
                {
                    path: "/html-css",
                    element: <HtmlCssPage />,
                },
            ],
        },
    ],
    {
        basename: "/",
    }
)
