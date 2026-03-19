import { motion } from "motion/react"

/**
 * @description react 정리에 대한 간략한 소개
 */
export function ReactHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">React</h1>

            <p className="text-lg text-slate-600 dark:text-slate-400">React의 핵심 개념과 실무 활용</p>
        </motion.div>
    )
}
