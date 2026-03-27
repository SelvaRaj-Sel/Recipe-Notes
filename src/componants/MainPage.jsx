import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import MainContext from '../context/MainContext'
import { useNavigate } from 'react-router'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const MainPage = () => {
  const { categories, fetchCategoryItem, selectedCategory,} = useContext(MainContext)
  const navigate = useNavigate()

  const handleCategoryClick = (categoryName) => {
    fetchCategoryItem(categoryName)
    navigate('/category-items')
  }

  return (
    <section
      id="mainpages"
      className="min-h-screen scroll-mt-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 px-4 py-20 sm:px-8 md:px-12"
    >
      
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-5 py-1.5 text-sm font-medium text-purple-300 tracking-wide mb-5"
        >
          🍽️ Categories
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
        >
          Explore Categories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-white/40 text-base sm:text-lg max-w-xl mx-auto"
        >
          Find the perfect recipe based on your meal type, mood, or lifestyle.
        </motion.p>
      </div>

      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((category) => (
          <motion.div
            key={category.idCategory}
            variants={item}
            onClick={() => handleCategoryClick(category.strCategory)}
            className={`group relative rounded-2xl overflow-hidden bg-white/5 border backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 ${
              selectedCategory === category.strCategory
                ? 'border-purple-500/60 shadow-lg shadow-purple-500/20 -translate-y-1'
                : 'border-white/10'
            }`}
          >
            <div className="relative overflow-hidden aspect-square">
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                loading='lazy'
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              
            </div>

            <div className="p-4">
              <h3 className="text-white font-bold text-lg tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                {category.strCategory}
              </h3>
              <p className="mt-1 text-white/40 text-sm line-clamp-2">
                {category.strCategoryDescription}
              </p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ring-1 ring-inset ring-purple-500/20" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default MainPage