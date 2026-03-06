import { createRoot } from "react-dom/client"
import { Providers } from "@/app/providers"
import { router } from "@/app/router"
import { ThemeProvider } from "./shared/model/ThemeProvider"

import "./global.css"

createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
        <Providers router={router} />
    </ThemeProvider>
)
