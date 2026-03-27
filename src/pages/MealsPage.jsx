import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import MainContext from '../context/MainContext'
import { FaYoutube, FaArrowLeft } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
}

const MealsPage = () => {
  const { mealDetails } = useContext(MainContext)
  const navigate = useNavigate()

  const getIngredients = (meal) => {
    const ingredients = []
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient,
          measure: measure?.trim() || '',
        })
      }
    }
    return ingredients
  }

  if (!mealDetails || mealDetails.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <GiCookingPot className="text-6xl text-pink-500/50 mx-auto mb-4" />
          <p className="text-white/50 text-lg">No meal selected</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 px-6 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium hover:bg-pink-500/20 hover:border-pink-500/30 transition-all duration-300 cursor-pointer"
          >
            ← Go Back
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      
      <div className="h-20" />

      {mealDetails.map((meal) => {
        const ingredients = getIngredients(meal)
        const instructions = meal.strInstructions
          ?.split(/\r?\n/)
          .filter((p) => p.trim().length > 0)

        return (
          <motion.div
            key={meal.idMeal}
            initial="hidden"
            animate="show"
            className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-16"
          >

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <motion.button
                variants={fadeUp}
                custom={0}
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white/50 hover:text-pink-400 text-sm font-medium transition-colors duration-300 cursor-pointer group"
              >
                <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform duration-300" />
                Back to recipes
              </motion.button>

              <motion.div variants={fadeUp} custom={0.5} className="flex items-center gap-2">
                {[
                  { label: '🏠 Home', path: '/' },
                  { label: '📂 Categories', path: '/' },
                  { label: '❤️ Favorites', path: '/favorites' },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.path)}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium hover:bg-pink-500/15 hover:border-pink-500/30 hover:text-pink-300 transition-all duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </motion.div>
            </div>

            
            <motion.div
              variants={fadeUp}
              custom={1}
              className="relative rounded-3xl overflow-hidden mb-10 aspect-video max-h-[480px]"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {meal.strCategory && (
                    <span className="inline-block rounded-full bg-pink-500/20 border border-pink-500/30 px-4 py-1 text-xs font-medium text-pink-300 tracking-wide">
                      {meal.strCategory}
                    </span>
                  )}
                  {meal.strArea && (
                    <span className="inline-block rounded-full bg-orange-500/20 border border-orange-500/30 px-4 py-1 text-xs font-medium text-orange-300 tracking-wide">
                      🌍 {meal.strArea}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-orange-200 bg-clip-text text-transparent leading-tight">
                  {meal.strMeal}
                </h1>
              </div>
            </motion.div>

          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
              <motion.div
                variants={fadeUp}
                custom={2}
                className="lg:col-span-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 h-fit"
              >
                <h2 className="text-xl font-bold text-white mb-1">Ingredients</h2>
                <p className="text-white/30 text-sm mb-6">
                  {ingredients.length} items needed
                </p>

                <ul className="space-y-3">
                  {ingredients.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeUp}
                      custom={index * 0.3 + 3}
                      className="flex items-start gap-3 group"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-pink-500/15 border border-pink-500/20 flex items-center justify-center text-xs font-bold text-pink-400">
                        {index + 1}
                      </span>
                      <div className="flex-1 flex items-baseline justify-between border-b border-white/5 pb-2">
                        <span className="text-white/90 text-sm font-medium">
                          {item.ingredient}
                        </span>
                        <span className="text-pink-400/80 text-xs font-medium ml-2 whitespace-nowrap">
                          {item.measure}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

           
              <motion.div
                variants={fadeUp}
                custom={3}
                className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8"
              >
                <h2 className="text-xl font-bold text-white mb-1">Instructions</h2>
                <p className="text-white/30 text-sm mb-6">Step-by-step guide</p>

                <div className="space-y-4">
                  {instructions?.map((para, i) => (
                    <p
                      key={i}
                      className="text-white/60 text-sm sm:text-base leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>

               
                {meal.strYoutube && (
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 mt-8 px-6 py-3 rounded-full bg-white-500/15 border border-white-500/30 text-white-400 text-sm font-semibold"
                  >
                    <FaYoutube className="text-lg text-red-500" />
                    Watch Video Tutorial
                  </a>
                )}

              </motion.div>
            </div>

           
            {meal.strTags && (
              <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-2">
                {meal.strTags.split(',').map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs text-white/40 font-medium"
                  >
                    #{tag.trim()}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        )
      })}
    </section>
  )
}

export default MealsPage