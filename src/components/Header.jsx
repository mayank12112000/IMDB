import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header row'>
        <div className="my-3  d-flex align-items-center justify-content-space-between">
            <Link to="/" className="mx-3 link imbd-icon"><span  className='fs-3'>IMBD</span></Link>
            <Link to="/movies/popular" className="header_link"><span>Popular </span></Link>
            <Link to="/movies/top_rated" className="header_link"><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" className="header_link"><span>Upcoming</span></Link>
        <i class="fa fa-user" aria-hidden="true"></i>
        </div>
    </div>
  )
}
