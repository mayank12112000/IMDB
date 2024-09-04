import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <nav className="p-0 my-3 navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <Link to="/" className="mx-3 link imbd-icon"><span  className='fs-3'>IMBD</span></Link>
      <ul className="navbar-nav ">
      <div className="dropdown ">
        <i className="fa fa-user" data-bs-toggle="dropdown"  aria-expanded="false" aria-hidden="true"></i>
        <ul className="dropdown-menu dropdown-menu-light">
          <Link className='link background-white color-white'><a className="dropdown-item" to="#">Action</a></Link>
          <Link className='link background-white color-white'><a className="dropdown-item" to="#">Another action</a></Link>
          <Link className='link background-white color-white'><a className="dropdown-item" to="#">Something else here</a></Link>
        </ul>
      </div>
      </ul>
    </div>
</nav>
       
  )
}
