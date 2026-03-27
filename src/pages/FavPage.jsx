import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router'
import MainContext from '../context/MainContext'
import { GiCookingPot } from 'react-icons/gi'
import { FaHeartBroken } from 'react-icons/fa'
import { MdDeleteSweep } from 'react-icons/md'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.3 } },
}

const FavPage = () => {
  const { fav, handleFav, handleMealsDetails } = useContext(MainContext)
  const navigate = useNavigate()

  const handleCardClick = (meal) => {
    handleMealsDetails(meal.idMeal)
    navigate('/meals')
  }

  if (!fav || fav.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <FaHeartBroken className="text-6xl text-pink-500/40 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white/70 mb-2">No Favorites Yet</h2>
          <p className="text-white/40 text-sm mb-8 max-w-sm mx-auto">
            Start exploring recipes and tap the heart icon to save your favorites here.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-sm font-semibold hover:bg-pink-500/25 hover:border-pink-400/50 transition-all duration-300 cursor-pointer"
          >
            Browse Recipes
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black px-4 py-20 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-pink-500/10 border border-pink-500/20 px-5 py-1.5 text-sm font-medium text-pink-300 tracking-wide mb-5">
            ❤️ My Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-orange-200 bg-clip-text text-transparent leading-tight">
            Favorite Recipes
          </h2>
          <p className="mt-4 text-white/40 text-base sm:text-lg">
            {fav.length} recipe{fav.length !== 1 ? 's' : ''} saved
          </p>
        </motion.div>

       
        <AnimatePresence mode="popLayout">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {fav.map((meal) => (
              <motion.div
                key={meal.idMeal}
                variants={item}
                exit="exit"
                layout
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1"
              >
                
                <div
                  className="relative overflow-hidden aspect-square"
                  onClick={() => handleCardClick(meal)}
                >
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

               
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFav(meal)
                  }}
                  className="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 p-2 text-white/70 hover:bg-red-500/30 hover:border-red-500/40 hover:text-red-400 transition-all duration-300 cursor-pointer"
                  title="Remove from favorites"
                >
                  <MdDeleteSweep className="text-lg" />
                </button>

                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ring-1 ring-inset ring-pink-500/20" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default FavPage
