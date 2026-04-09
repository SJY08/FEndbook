import { motion } from "motion/react"

/**
 * @description 섹션 소개 페이지
 */

interface IProps {
    title: string
    content: string
}

export function SectionHeader({ title, content }: IProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">{title}</h1>

            <p className="text-lg text-slate-600 dark:text-slate-400">{content}</p>
        </motion.div>
    )
}
