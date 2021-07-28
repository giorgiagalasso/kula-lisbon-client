import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function Footer (){
return (

    <>
   
<footer class="text-center text-lg-start bg-light text-muted">

  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
    <div class="me-5 d-none d-lg-block">
      <span>Find and connect with us on:</span>
      <a href="https://www.instagram.com/kulalisbon/?hl=en"><img className="insta-icon" src="../instagram.png" style={{width:16}}></img></a>
      <a href="https://www.facebook.com/profile.php?id=100070787483244"><img className="insta-icon" src="../facebook.png" style={{width:16}}></img></a>
    </div>
   
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
   
  </section>
  
  <section class="">
    <div class="container text-center text-md-start mt-5">
   
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Kula
          </h6>
          <p>
            Kula, as a community we want to create a safe space where you can come, disconnect,
            practice, breathe and let go feeling at peace with where you are. 
            Make your booking through mind and body.
          </p>
        </div>
        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* try to insert the insagram feed here */}
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/schedule" class="text-reset">Schedule</a>
          </p>
          <p>
            <a href="/covidguidelines" class="text-reset">Covid Guidelines</a>
          </p>
          <p>
            <a href="/about" class="text-reset">Our Community</a>
          </p>

         
          
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i>Lisbon</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            kulalisbon@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 39 389 686 0263</p>
          
        </div>
        
      </div>
    
    </div>
  </section>
 
</footer>

    </>
)
}



export default Footer;