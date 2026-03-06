import { useEffect } from "react"
import { useThemeStore } from "@/shared/store/theme.store"

/**
 * @description html에 dark 클래스 적용
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useThemeStore((s) => s.theme)

    useEffect(() => {
        const root = document.documentElement

        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    }, [theme])

    return children
}
