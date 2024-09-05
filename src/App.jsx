import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import FavoriteMovies from './pages/FavoriteMovies'

function App() {

  return (
    <div>
      <Header />
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
          <Route path='/saved-movies' element={<FavoriteMovies/>}/>
          <Route path='/*' element={<h1>error page</h1>}/>
        </Routes>
        
    </div>
  )
}

export default App
