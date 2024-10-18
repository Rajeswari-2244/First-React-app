import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
        </li>
        
        <li class="nav-item">
          <Link to='Contact_pg' class="nav-link">contact us</Link>
        </li>
       
        <li class="nav-item">
          <Link to='/usestate' class="nav-link">use state</Link>
        </li>

        <li class="nav-item">
          <Link to='/useeffect' class="nav-link">use effect</Link>
        </li>

       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar2