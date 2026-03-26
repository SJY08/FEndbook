import { Link } from "react-router"
import { Code2, Github, Mail } from "lucide-react"
import { motion } from "motion/react"

const categoryLinks = [
    { path: "/html-css", label: "HTML/CSS" },
    { path: "/javascript", label: "JavaScript" },
    { path: "/react", label: "React" },
    { path: "/browser", label: "브라우저" },
    { path: "/cs", label: "CS" },
]

/**
 * @description 푸터 컴포넌트
 */
export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-slate-300 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                            </motion.div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">팬드북</span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            프론트엔드 실무 면접 준비를 위한 체계적인 내용 정리 플랫폼
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white">카테고리</h3>
                        <ul className="space-y-2">
                            {categoryLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white">연락처</h3>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/SJY08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:jiyuseo2008@gmail.com"
                                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-300 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            © {currentYear} 팬드북 (FEndbook). All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
