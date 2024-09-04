import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'

function App() {

  const [searchKey,setSearchKey] = useState('')
  return (
    <div>
      <Header searchKey={searchKey} setSearchKey={setSearchKey} />
        <Routes>
          <Route index element={<Homepage searchKey={searchKey}/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
          <Route path='/*' element={<h1>error page</h1>}/>
        </Routes>
    </div>
  )
}

export default App
