import { motion } from "motion/react"
import { Card } from "../Card"

/**
 * @description 프로젝트 소개 섹션
 */
export function AboutSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16 max-w-3xl mx-auto"
        >
            <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur shadow-lg border-2 border-slate-300 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">프로젝트 소개</h2>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    코딩테스트와 달리 실무 면접은 무조건 들어가게 되고, 내용도 매우 방대합니다. 프론트엔드 분야는 특히
                    HTML/CSS, JavaScript, React, 브라우저 동작 원리, 컴퓨터 과학 기초까지 다양한 지식이 요구됩니다.
                </p>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    팬드북은 이러한 실무 면접 내용들을 카테고리별로 체계적으로 정리하여, 효율적인 면접 준비를
                    도와드립니다.
                </p>
            </Card>
        </motion.div>
    )
}
