import React from 'react'
import { motion } from 'framer-motion'
import { IoRestaurant, IoHeart, IoGlobe, IoPeople } from 'react-icons/io5'

const stats = [
  { icon: <IoRestaurant className="text-2xl" />, value: '10,000+', label: 'Recipes' },
  { icon: <IoGlobe className="text-2xl" />, value: '120+', label: 'Cuisines' },
  { icon: <IoPeople className="text-2xl" />, value: '50K+', label: 'Home Cooks' },
  { icon: <IoHeart className="text-2xl" />, value: '1M+', label: 'Meals Made' },
]

const features = [
  {
    emoji: '🍳',
    title: 'Curated Recipes',
    desc: 'Every recipe is handpicked and tested by our team of food enthusiasts to guarantee delicious results.',
  },
  {
    emoji: '🥗',
    title: 'For Every Diet',
    desc: 'From vegan to keto, gluten-free to comfort food — we have something for every lifestyle and preference.',
  },
  {
    emoji: '⏱️',
    title: 'Quick & Easy',
    desc: 'Short on time? Filter by cook time and difficulty to find meals that fit your busy schedule.',
  },
  {
    emoji: '🌍',
    title: 'Global Flavors',
    desc: 'Travel the world through food. Explore authentic recipes from over 120 different cuisines.',
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black px-4 py-2 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-5 py-1.5 text-sm font-medium text-purple-300 tracking-wide mb-5"
          >
            ✨ About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
          >
            Where Passion Meets Flavor
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/40 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Recipe World was born from a simple belief — that great food brings people together.
            We're on a mission to make cooking accessible, exciting, and joyful for everyone.
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.07] hover:-translate-y-1"
            >
              <div className="flex justify-center mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                {stat.icon}
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</p>
              <p className="text-white/40 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.07] hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 block">{feature.emoji}</span>
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30"
        >
          <div className="rounded-3xl bg-gray-950 px-8 py-14 sm:px-14 text-center">
            <span className="text-5xl mb-6 block">🍽️</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              "To inspire home cooks around the world with recipes that are easy to follow,
              full of flavor, and made with love. Whether you're a beginner or a seasoned chef,
              Recipe World is your kitchen companion."
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3 text-white font-semibold text-sm shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
              >
                Start Cooking →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About