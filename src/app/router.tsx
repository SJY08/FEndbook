import BrowserPage from "@/pages/browser/BrowserPage"
import CSPage from "@/pages/cs/CsPage"
import HtmlCssPage from "@/pages/html-css/HtmlCssPage"
import JavascriptPage from "@/pages/javascript/JavascriptPage"
import LandingPage from "@/pages/landing/LandingPage"
import ReactPage from "@/pages/react/ReactPage"
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
                {
                    path: "/javascript",
                    element: <JavascriptPage />,
                },
                {
                    path: "/react",
                    element: <ReactPage />,
                },
                {
                    path: "/browser",
                    element: <BrowserPage />,
                },
                {
                    path: "/cs",
                    element: <CSPage />,
                },
            ],
        },
    ],
    {
        basename: "/",
    }
)
