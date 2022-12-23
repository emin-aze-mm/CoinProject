import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryPage from './components/CategoryPage/CategoryPage'

import HomePage from './components/HomePage/HomePage'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" index element={<HomePage/>}/>
        <Route path="/:category" element={<CategoryPage/>}/>
      </Routes> 
    </div>
  )
}

export default App