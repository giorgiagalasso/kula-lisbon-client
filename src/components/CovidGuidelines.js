import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const CovidGuidelines = () => {
    return(
        <>
        <div className="covid-guidelines">
        
<h1>Covid-19 Requirments</h1>

<h4><i>Measures in Studio & Booking Procedures as Per Government Guidelines</i></h4>


<div className="guideline-text">
<h5> - Social distancing between students, limited space available. Booking Essential via the Mindbody App.<br></br></h5>

<h5>- Arrive at least 10 minutes before class starts, check in closes 2 minutes before class starts, thereafter your spot will be forfeited regardless of booking.<br></br></h5>

<h5>- No shows on bookings will have the pass deducted from your pass pack. Cancellations must occur any bookings 1 hour before class starts.<br></br></h5>

<h5>- No hands on assists will be given by teachers, only verbal cues.<br></br></h5>

<h5>- Access to the studio will be 15 mins before and after class.<br></br></h5>

<h5>- Studio and equipment will be cleaned using hospitality grade  & eco friendly products after every class.<br></br></h5>

<h5>- Masks are mandatory on arrival and exit of the studio and optional once on your mat.<br></br></h5>

<h5>- Access to hand sanitizer provided and to be used on entering. <br></br></h5>

<h5>- Filtered water is still available but please bring your own water bottle, glasses will not be provided.<br></br></h5>

<h5>- Patio doors open at the beginning and the end of class to allow for ease of foot traffic flow.<br></br></h5>

<h5>- We encourage you to bring your own mat, which are welcome to leave it at Kula. <br></br></h5>

<h5>- But should you wish to continue using the studio mats, take comfort in knowing we will sterilize and dry them after every use. <br></br></h5>

</div>

<div>
    <img className="space-about" src="../kula_heart.png" style={{width: "100px"}}></img>
    </div>
</div>
        </>
    )
}

export default CovidGuidelines;