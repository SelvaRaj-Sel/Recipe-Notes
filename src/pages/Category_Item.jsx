import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MainContext from '../context/MainContext'
import Nav from '../componants/Nav'
import { GrFavorite } from 'react-icons/gr'
import { useNavigate } from 'react-router'



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
}

const Category_Item = () => {
  const { categoryItem, selectedCategory, handleFav, handleMealsDetails, mealDetails } = useContext(MainContext)

  if (!selectedCategory) return null

  const navigate = useNavigate()


  const handleMealsDetailsclick = (mealid) => {
    handleMealsDetails(mealid)
   navigate('/meals')
  }

  return (
    <>
    <section
      id="category-items"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black px-4 py-20 sm:px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
       
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-pink-500/10 border border-pink-500/20 px-5 py-1.5 text-sm font-medium text-pink-300 tracking-wide mb-5">
            🍴 {selectedCategory}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-orange-200 bg-clip-text text-transparent leading-tight">
            {selectedCategory} Recipes
          </h2>
          <p className="mt-4 text-white/40 text-base sm:text-lg">
            {categoryItem.length} recipes found
          </p>
        </motion.div>

        
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categoryItem.map((meal) => (
              <motion.div
              onClick={()=>handleMealsDetailsclick(meal.idMeal)}
                key={meal.idMeal}
                variants={item}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-base leading-tight group-hover:text-pink-300 transition-colors duration-300">
                      {meal.strMeal}
                    </h3>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ring-1 ring-inset ring-pink-500/20" />
                <button onClick={()=>handleFav(meal)} className="absolute top-4 right-4 rounded-full bg-white/20 px-4 py-2 text-white transition hover:bg-white/30 hover:text-pink-50">
                  <GrFavorite className='text-black hover:text-red-500'/></button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
    </>
  )
}

export default Category_Item