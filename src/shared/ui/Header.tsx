import { Link, useLocation } from "react-router"
import { CodeXml, BookOpen, Cpu, Globe, GraduationCap, Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { memo, useState } from "react"
import clsx from "clsx"
import { useThemeStore } from "@/shared/store/theme.store"

/**
 * @description 네비게이션 메뉴 목록
 */
const navItems = [
    { path: "/html-css", label: "HTML/CSS", icon: CodeXml },
    { path: "/javascript", label: "JavaScript", icon: BookOpen },
    { path: "/react", label: "React", icon: Cpu },
    { path: "/browser", label: "브라우저", icon: Globe },
    { path: "/cs", label: "CS", icon: GraduationCap },
]

/**
 * @description 상단 헤더 네비게이션
 */
export const Header = memo(function Header() {
    const location = useLocation()
    const { theme, toggleTheme } = useThemeStore()
    const [open, setOpen] = useState(false)

    return (
        <>
            <header
                className={clsx(
                    "sticky top-0 z-50",
                    "border-b backdrop-blur-md",
                    "bg-white/80 dark:bg-slate-900/80",
                    "border-slate-200 dark:border-slate-800",
                    "transition-colors duration-300"
                )}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-4">
                    <Link to="/" className="flex items-center gap-2">
                        <CodeXml className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-lg font-semibold text-slate-900 dark:text-white">팬드북</span>
                    </Link>

                    {/* 데스크탑 네비게이션 */}
                    <nav className="hidden items-center gap-2 lg:flex">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = location.pathname === item.path

                            return (
                                <Link key={item.path} to={item.path}>
                                    <motion.div
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={clsx(
                                            "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium",
                                            "transition-colors duration-200",
                                            isActive
                                                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                                                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.label}
                                    </motion.div>
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className={clsx(
                                "flex items-center justify-center",
                                "h-10 w-10 rounded-lg",
                                "bg-slate-100 dark:bg-slate-800",
                                "text-slate-700 dark:text-slate-300",
                                "hover:bg-slate-200 dark:hover:bg-slate-700",
                                "transition-colors"
                            )}
                        >
                            {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </motion.button>

                        {/* 모바일/태블릿 메뉴 버튼 */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setOpen(true)}
                            className={clsx(
                                "lg:hidden",
                                "flex items-center justify-center",
                                "h-10 w-10 rounded-lg",
                                "bg-slate-100 dark:bg-slate-800",
                                "text-slate-700 dark:text-slate-300",
                                "hover:bg-slate-200 dark:hover:bg-slate-700",
                                "transition-colors"
                            )}
                        >
                            <Menu className="h-5 w-5" />
                        </motion.button>
                    </div>
                </div>
            </header>

            {/* 모바일 사이드바 */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40"
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.25 }}
                            className={clsx(
                                "fixed right-0 top-0 z-50 h-full w-72",
                                "bg-white dark:bg-slate-900",
                                "border-l border-slate-200 dark:border-slate-800",
                                "p-6 space-y-4"
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-slate-900 dark:text-white">메뉴</span>
                                <button onClick={() => setOpen(false)}>
                                    <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                                </button>
                            </div>

                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = location.pathname === item.path

                                return (
                                    <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>
                                        <div
                                            className={clsx(
                                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium",
                                                "transition-colors",
                                                isActive
                                                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                                                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                            )}
                                        >
                                            <Icon className="h-4 w-4" />
                                            {item.label}
                                        </div>
                                    </Link>
                                )
                            })}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    )
})
