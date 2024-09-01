import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header row'>
        <div className="my-3 container d-flex align-items-center">
            <Link to="/" className="mx-3 link imbd-icon"><span  className='fs-3'>IMBD</span></Link>
            <Link to="/popular" className="header_link"><span>Popular </span></Link>
            <Link to="/top_rated" className="header_link"><span>Top Rated</span></Link>
            <Link to="upcoming" className="header_link"><span>Upcoming</span></Link>
        </div>
    </div>
  )
}
