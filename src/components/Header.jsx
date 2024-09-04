import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export default function Header({searchKey,setSearchKey}) {
  return (
    <>
  <nav className="p-0 navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <Link to="/" className="mx-3 my-3 link imbd-icon"><span  className='fs-3'>IMBD</span></Link>
  <div className="d-flex search-movie pe-5 ps-5" role="search">
        <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} className="form-control me-2" type="search" placeholder="Search movies" aria-label="Search"/>
      </div>
      </div>
</nav>
      <div style={{zIndex:"1000"}} className="profile ">
        <i  className="fa fa-user mx-1 dropdown" data-bs-toggle="dropdown"  aria-expanded="false" aria-hidden="true"></i>
        <ul style={{zIndex:"1000"}} className="dropdown-menu dropdown-menu-dark">
          <Link to="/profile" className='link background-white color-white'><span className="dropdown-item">Profile</span></Link>
          <Link to="/saved-movies" className='link background-white color-white'><span className="dropdown-item">Saved movies</span></Link>
          <Link to="/about" className='link background-white color-white'><span className="dropdown-item">About</span></Link>
        </ul>
      </div>
    </>
       
  )
}
