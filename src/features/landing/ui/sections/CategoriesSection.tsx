import { motion } from "motion/react"
import { categories } from "../../model/categories"
import { CategoryCard } from "../CategoryCard"

/**
 * @description 카테고리 섹션
 */
export function CategoriesSection() {
    return (
        <div className="mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-10"
            >
                카테고리
            </motion.h2>

            {/* 카테고리 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <CategoryCard key={category.path} {...category} index={index} />
                ))}
            </div>
        </div>
    )
}
