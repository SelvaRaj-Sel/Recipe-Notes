import { useState } from 'react'
import Nav from './componants/Nav'
import { ContextProvider } from './context/MainContext'
import './App.css'
import Hero from './componants/Hero'
import MainPage from './componants/MainPage'
import Category_Item from './pages/Category_Item'
import About from './componants/About'
import MealsPage from './pages/MealsPage'
import FavPage from './pages/FavPage'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <>
    <ContextProvider>
      <BrowserRouter> 
      
      <Routes>
        <Route path='/' element={<><Nav /><Hero /><MainPage /><About/></>} />
        <Route path='/category-items' element={<><Nav /><Category_Item/><About/></>}/>
        <Route path='/meals' element={<><Nav /><MealsPage/><About/></>}/>
        <Route path='/favorites' element={<><FavPage/><About/></>}/>
        
      </Routes>
      </BrowserRouter>
    </ContextProvider>

    </>
  )
}

export default App
