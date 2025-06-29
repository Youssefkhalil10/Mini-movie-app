import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow " style={{ backgroundColor: "rgba(17, 12, 38, 0.8)" }} >
  <div className="container-fluid ">

    <Link className="navbar-brand fw-bolder" to="/">NOXE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          props.userData ? <>
        <li className="nav-item">
          <Link className="nav-link active"  to="network">Person</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="about">Tv</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="home">Movies</Link>
        </li>

          </> :''
        }
        
       
      </ul>



      <ul className="navbar-nav  mb-2 mb-lg-0">

      <li className="nav-item me-3 d-flex align-items-center">
        <i className=' mx-2 fab fa-instagram'></i>
        <i className=' mx-2 fab fa-facebook'></i>
        <i className=' mx-2 fab fa-youtube'></i>
        <i className=' mx-2 fab fa-spotify'></i>
        </li>

        {
          props.userData? <>
        <li className="nav-item">
          <Link className="nav-link active"  onClick={props.logout}>LogOut</Link>
        </li>

          </>
          :
          <>
        <li className="nav-item">
          <Link className="nav-link active"  to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="register">Register</Link>
        </li>
          </>
        }

       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
