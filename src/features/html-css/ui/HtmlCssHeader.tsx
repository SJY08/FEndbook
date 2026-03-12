import { motion } from "motion/react"

/**
 * @description html 및 css 정리에 대한 간략한 소개
 */
export function HtmlCssHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">HTML / CSS</h1>

            <p className="text-lg text-slate-600 dark:text-slate-400">
                마크업과 스타일링의 기초부터 실무 면접에서 자주 나오는 개념들을 정리했습니다.
            </p>
        </motion.div>
    )
}
