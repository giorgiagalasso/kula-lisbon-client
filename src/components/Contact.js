import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const Contact = () => {
    return(
        <>
        
      <div className="contact-us-section">
<section class="mb-6">
    
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5"><i>Do you have any questions? Please do not hesitate to contact us directly.  Our team will come back to you within
        a matter of hours to help you.</i></p>


<div id="contactform">
    <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
               
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" placeholder="Name"></input>
                            <label for="name" class=""></label>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" placeholder="Email"></input>
                            <label for="email" class=""></label>
                        </div>
                    </div>
                   

                </div>
               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject"></input>
                            <label for="subject" class=""></label>
                        </div>
                    </div>
                </div>
               
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea placeholder="Your Message" type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message"></label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div class="text-center text-md-left">
                <a class="btn" id="create-new-button" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
</div>



    </div>

</section>
</div>

 <div id="whereweare">
<div class="col-md-3 text-center" id="where-we-are">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>R. Monte Olivete 30A</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 39 389 686 0263</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>kulalisbon@gmail.com</p>
                </li>
            </ul>
        </div>

</div> 



        </>
    )
}

export default Contact;