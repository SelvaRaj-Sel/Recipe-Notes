import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const MainContext = createContext()

// Helper to safely read from localStorage
const loadFromStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

export const ContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [categoryItem, setCategoryItem] = useState(() => loadFromStorage('categoryItem', []))
  const [selectedCategory, setSelectedCategory] = useState(() => loadFromStorage('selectedCategory', null))
  const [mealDetails, setMealDetails] = useState(() => loadFromStorage('mealDetails', []))
  const [fav, setFav] = useState(() => loadFromStorage('fav', []))

  // Sync state to localStorage
  useEffect(() => { localStorage.setItem('categoryItem', JSON.stringify(categoryItem)) }, [categoryItem])
  useEffect(() => { localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory)) }, [selectedCategory])
  useEffect(() => { localStorage.setItem('mealDetails', JSON.stringify(mealDetails)) }, [mealDetails])
  useEffect(() => { localStorage.setItem('fav', JSON.stringify(fav)) }, [fav])

  // Fetch all categories on mount
  const fetchCategories = async () => {
    try {
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      setCategories(res.data.categories)
    } catch (err) {
      console.error('Failed to load the categories:', err)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  // Favorite meal add / remove
  const handleFav = (meal) => {
    const index = fav.findIndex((item) => item.idMeal === meal.idMeal)
    if (index === -1) {
      setFav([...fav, meal])
      console.log('meal added to fav:', meal)
    } else {
      setFav([
        ...fav.slice(0, index),
        ...fav.slice(index + 1),
      ])
      console.log('meal removed from fav:', meal)
    }
  }

  // Fetch items for a particular category
  const fetchCategoryItem = async (categoryName) => {
    try {
      setSelectedCategory(categoryName)
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      setCategoryItem(res.data.meals)
    } catch (err) {
      console.error('Failed to load the category items:', err)
    }
  }

  // Fetch full meal details by id
  const handleMealsDetails = async (mealid) => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      setMealDetails(res.data.meals)
    } catch (err) {
      console.log('failed to load data', err)
    }
  }

  return (
    <MainContext.Provider value={{
      categories,
      categoryItem,
      selectedCategory,
      mealDetails,
      fav,
      handleFav,
      fetchCategoryItem,
      handleMealsDetails,
    }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContext