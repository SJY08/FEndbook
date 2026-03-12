import { Link } from "react-router"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Card } from "../Card"
import { Button } from "@/shared/ui/Button"

/**
 * @description CTA(행동유도) 섹션
 */
export function CTASection({ delay = 0 }: { delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
            className="text-center"
        >
            <Card className="p-8 bg-linear-to-r from-indigo-600 to-fuchsia-600 dark:from-indigo-700 dark:to-fuchsia-700 text-white border-0 shadow-xl">
                <motion.h2
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-3xl font-bold mb-4"
                >
                    지금 바로 시작하세요!
                </motion.h2>

                <p className="text-lg mb-6 opacity-90">체계적인 학습으로 프론트엔드 실무 면접을 완벽하게 준비하세요</p>

                {/* 기초인 html/css로 이동 */}
                <Link to="/html-css">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="lg" variant="secondary" className="font-bold">
                            학습 시작하기
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                </Link>
            </Card>
        </motion.div>
    )
}
