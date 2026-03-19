import { motion } from "motion/react"

/**
 * @description cs 정리에 대한 간략한 소개
 */
export function CSHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">CS</h1>

            <p className="text-lg text-slate-600 dark:text-slate-400">컴퓨터 과학 기초 개념과 이론</p>
        </motion.div>
    )
}
