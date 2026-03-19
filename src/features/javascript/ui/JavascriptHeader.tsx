import { motion } from "motion/react"

/**
 * @description javascipt 정리에 대한 간략한 소개
 */
export function JavascriptHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Javscript</h1>

            <p className="text-lg text-slate-600 dark:text-slate-400">JavaScript 핵심 개념과 동작 원리</p>
        </motion.div>
    )
}
