import { Link } from "react-router"
import { Card } from "./Card"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

interface Props {
    path: string
    title: string
    description: string
    icon: any
    color: string
    index: number
}

/**
 * @description 카테고리 카드 컴포넌트
 */
export function CategoryCard({ path, title, description, icon: Icon, color, index }: Props) {
    return (
        <Link to={path}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
            >
                <Card className="p-6 min-h-82.5 cursor-pointer bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 h-full shadow-lg hover:shadow-2xl transition-shadow duration-200">
                    <div className={`h-14 w-14 p-3 rounded-lg mb-4 ${color}`}>
                        <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>

                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                        <span>학습하기</span>

                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </motion.div>
                    </div>
                </Card>
            </motion.div>
        </Link>
    )
}
