import { Outlet } from "react-router"
import { Header } from "../ui/Header"
import { ScrollToTop } from "../ui/ScrollToTop"

/**
 * @description 모든 페이지에서 공통으로 사용하는 레이아웃
 */
export function RootLayout() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
            <ScrollToTop />
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    )
}
