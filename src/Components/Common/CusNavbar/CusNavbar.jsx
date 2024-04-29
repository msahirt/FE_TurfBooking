import React from 'react'
import './CusNavbar.css'
import neymar from '@assets/neymar.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CusNavbar() {
  const {user} = useSelector(state=>state.user)
  const navigate = useNavigate()
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" >Green Gr<img src={neymar} alt=""></img>d</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-lg-0">
        <li className="nav-item" onClick={()=>navigate('/home')}>
          Home
        </li>
      {user.role===1 && <li className="nav-item" onClick={()=>navigate('/newcourt')}>
        Add New Court
      </li>}
      <li className="nav-item" onClick={()=>navigate('/courts/courtlist')}>
          Courts
        </li>
      </ul>
      <span className="navbar-text">
      <div className="nav-item dropdown">
          <span className="nav-link dropdown-toggle user-drop-dwon"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user.firstName+" " +user.lastName}
          </span>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><span className="dropdown-item" >Profile</span></li>
            {/* <li><span className="dropdown-item" >Another action</span></li> */}
            <li><span className="dropdown-item" >Log Out</span></li>
          </ul>
        </div>
      </span>
    </div>
  </div>
</nav>
    
  )
}

export default CusNavbar
