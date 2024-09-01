import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import MovieList from './pages/MovieList'

function App() {

  return (
    <div>
      <Header/>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='/movie/:id' element={<h1>movie details page</h1>}/>
          <Route path='/movies/:type' element={<MovieList/>}/>
          <Route path='/*' element={<h1>error page</h1>}/>
        </Routes>
    </div>
  )
}

export default App
