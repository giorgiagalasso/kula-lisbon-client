import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../api';

function Navbar ({ loggedInUser, setLoggedInUser }) {
  console.log(loggedInUser);
  const logoutUser = async () => {
    await logout();
    setLoggedInUser(null);
  };
  
  
  console.log(loggedInUser)
  
return loggedInUser ? (



   <nav class="navbar navbar-expand-lg navbar-light bg-transparent" >
   <p>Welcome {loggedInUser.username}</p>
  <div class="container-fluid">
    <a class="navbar-brand"><img src="../my-logo.png" style={{width:100}}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
      <ul class="navbar-nav" id="all-navbar-items">
       
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/" >
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/about">About Kula</a></li>
            <li><a class="dropdown-item" href="/covidguidelines">Covid Guidelines</a></li>
            <li><a class="dropdown-item" href="/contact">Contact Us</a></li>
          </ul>
          </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Yoga
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="/teachers">Our Teachers</a></li>
            <li><a class="dropdown-item" href="/schedule">Schedule</a></li>
            <li><a class="dropdown-item" href="/classdescription">Class Description</a></li>
            <li><a class="dropdown-item" href="/privateclass">Private Classes</a></li>
          </ul>
          </li>

          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/workshop">Workshops</a>
          </li>

          
          <li class="nav-item">
          <a href="https://www.instagram.com/kulalisbon/?hl=en"><img className="insta-icon" src="../instagram.png" style={{width:16}}></img></a>
          </li>

          

          <li class="nav-item">
          <a href="https://www.facebook.com/profile.php?id=100070787483244"><img className="insta-icon" src="../facebook.png" style={{width:16}}></img></a>
          </li>
          <li>
          <NavLink to="/">
            <a className="logout-button" onClick={logoutUser}>Logout</a>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>) : 
(
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent" >
  <div class="container-fluid">
    <a class="navbar-brand"><img src="../my-logo.png" style={{width:100}}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
      <ul class="navbar-nav" id="all-navbar-items">
       
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/" >
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/about">About Kula</a></li>
            <li><a class="dropdown-item" href="/covidguidelines">Covid Guidelines</a></li>
            <li><a class="dropdown-item" href="/contact">Contact Us</a></li>
          </ul>
          </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Yoga
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="/teachers">Our Teachers</a></li>
            <li><a class="dropdown-item" href="/schedule">Schedule</a></li>
            <li><a class="dropdown-item" href="/classdescription">Class Description</a></li>
            <li><a class="dropdown-item" href="/privateclass">Private Classes</a></li>
          </ul>
          </li>

          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/workshop">Workshops</a>
          </li>
          

          <li class="nav-item loginsignup">    
          <div className="two-anchors">
          <a className="icons" href="https://www.facebook.com/profile.php?id=100070787483244"><img className="insta-icon" src="../facebook.png" style={{width:16}}></img></a>
          <a className="icons" href="https://www.instagram.com/kulalisbon/?hl=en"><img className="insta-icon" src="../instagram.png" style={{width:16}}></img></a>
          <a class="nav-link active" aria-current="page" href="/login">Login</a>      
          <a class="nav-link active" aria-current="page" href="/signup">Sign Up</a>
          </div> 
 
        </li>
      

      </ul>
    </div>
  </div>
</nav>  
)
}




export default Navbar;
