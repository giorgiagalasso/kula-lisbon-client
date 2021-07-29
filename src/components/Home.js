import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = ({ user }) => {
    console.log(user);
    return(
        <>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active carousel-box">
      <img src="../home-page.jpg" class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="carousel-title">Kula</h5>
        <p className="carousel-text"><i>A place to Heal, grow and breathe together.</i></p>
      </div>
    </div>
    <div class="carousel-item carousel-box">
      <img src="../mindfulness.jpg" class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="carousel-title">Kula</h5>
        <p className="carousel-text"><i>Find your home away from home.</i></p>
      </div>
    </div>
    <div class="carousel-item carousel-box">
      <img src="../carouselll.jpg" class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="carousel-title">Kula</h5>
        <p className="carousel-text"><i>Where breath and movement come together.</i></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div className="second-part-mainpage">
  <img src="../class-detail.png" style={{width: "400px"}}></img>

  <div className="ourmission-text">
    <h3>Our Mission</h3>
    <p>To create a space to feel love, <br></br>
But also a place to breathe and connect,<br></br>
A place to slow down,<br></br>
A place to grow,<br></br>
A place to breathe,<br></br>
A place to nourish your soul,<br></br>
A place to dream,<br></br>
A place to eat,<br></br>
A place to work,<br></br>
A place to re charge, <br></br>
A place to just be, <br></br>
And last but not least a place you <br></br> 
can not only call home, <br></br>
but your yoga studio in Lisbon. <br></br>

From our hearts to yours, <br></br>
Kula.</p>
    <img src="../kula_heart.png" style={{width: "110px"}}></img>
  </div>
</div>




{/* <div className="main-page-mission">

  
<div class="card bg-dark text-white">
  <img class="card-img" src="../homee.png" alt="Card image" style={{width: "500px"}}></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Our Mission</h5>
    <p>To create a place to mainly to feel love,</p>
    <p>But also a place to breathe and connect,</p>
    <p>A place to slow down,</p>
    <p>A place to grow,</p>
    <p>A place to breathe,</p>
    <p>A place to dream,</p>
    <p>A place to re-charge,</p>
    <p>A place to just be,</p>
    <p>A place you can call home.</p>
    <p>Your Yoga Studio In Lisbon,</p>
    <p>With Love, Kula.</p>
  </div>
</div> */}
  
  {/* <div>
  <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>

  <div>
  <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div> */}
  
  
  
  
  
  
  
  
    


{/* 
   <div className="home-page-text"> 
    <h5>To create a place to mainly to feel love, <br></br>
But also a place to breathe and connect,<br></br>
A place to slow down,<br></br>
A place to grow,<br></br>
A place to breathe,<br></br>
A place to nourish your soul,<br></br>
A place to dream,<br></br>
A place to eat,<br></br>
A place to work,<br></br>
A place to re charge <br></br>
A place to just be, <br></br>
And last but not least a place you can not only call home, <br></br>
but your yoga studio in Lisbon. <br></br>

From our hearts to yours, <br></br>
Kula.<br></br>
</h5>
</div> */}

{/* 
</div> */}



<div className="admin-class">
{/* Classes for admin */}

{  
    (user && user.role ==="Admin") ? <NavLink to="classes/add"> Add Class </NavLink> :
    <p></p>    
} 


{  
    (user && user.role ==="Admin") ? <NavLink to="/classes/:id/edit">Update Class</NavLink> :
    <p></p>    
} 

{  
    (user && user.role ==="Admin") ? <NavLink to="/classes/:id">Delete Class</NavLink> :
    <p></p>    
} 
</div>


{/* teachers for admin */}

<div className="admin-teachers">
{  
    (user && user.role ==="Admin") ? <NavLink to="/teachers/add">Add Teacher</NavLink> :
    <p></p>    
} 

{  
    (user && user.role ==="Admin") ? <NavLink to="/teachers/:id/edit">Update Teacher</NavLink> :
    <p></p>    
} 

{  
    (user && user.role ==="Admin") ? <NavLink to="/teachers/:id">Delete Teacher</NavLink> :
    <p></p>    
} 

</div>

{/* { 

    https://i.pinimg.com/474x/79/0e/e2/790ee2418d0f231b64df202a0ac74f24.jpg
user ? <p>hello</p> :

 user.role ? <NavLink to="classes/add">Add Class</NavLink> :
 
 <p> not loggedIn</p>

 } */}
        </>
    )
}

export default Home;