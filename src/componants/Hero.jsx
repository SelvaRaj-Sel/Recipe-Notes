import React from 'react'
import { motion } from 'framer-motion'
import { IoChevronDown } from 'react-icons/io5'
import hero_img from '../assets/hero.jpg'

const Hero = () => {

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <img
        src={hero_img}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-medium text-white/90 tracking-wide">
            🍳 Discover 10,000+ Recipes
          </span>
        </motion.div>

       
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Cook Smarter.
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-300 bg-clip-text text-transparent">
            Eat Better.
          </span>
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed"
        >
          Discover thousands of recipes, curated for every taste and occasion.
          <br className="hidden sm:block" />
          From quick weeknight dinners to show-stopping feasts.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/"
            onClick={(e)=>{e.preventDefault(); window.location.href = '/';}}
            id='mainpages'
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3.5 text-white font-semibold text-base shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105"
          >
            Explore Recipes
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#ideas"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-3.5 text-white font-semibold text-base transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
          >
            Find by Ingredients
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <IoChevronDown className="text-white/60 text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero