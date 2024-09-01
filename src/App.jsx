import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'

function App() {

  return (
    <div>
      <Header/>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='moive/:id' element={<h1>movie details page</h1>}/>
          <Route path='moives/:type' element={<h1>movie list page</h1>}/>
          <Route path='/*' element={<h1>error page</h1>}/>
        </Routes>
    </div>
  )
}

export default App
