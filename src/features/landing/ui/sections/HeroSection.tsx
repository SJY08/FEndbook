import { Code2 } from "lucide-react"
import { motion } from "motion/react"

const techStack = ["✨ TypeScript", "⚛️ React", "🎨 Tailwind CSS"]

/**
 * @description 최상단 섹션
 */
export function HeroSection() {
    return (
        <div className="text-center mb-16">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex justify-center mb-6"
            >
                <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="p-4 bg-indigo-600 dark:bg-indigo-500 rounded-2xl shadow-lg"
                >
                    <Code2 className="h-16 w-16 text-white" />
                </motion.div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
            >
                팬드북 (FEndbook)
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8"
            >
                프론트엔드 실무 면접 준비를 위한 체계적인 내용 정리 플랫폼
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
            >
                {techStack.map((tech) => (
                    <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-400 dark:border-slate-700"
                    >
                        <span className="text-sm text-slate-700 dark:text-slate-300">{tech}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
