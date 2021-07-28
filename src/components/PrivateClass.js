import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const PrivateClass = () => {
    return(
        <>
        <div className="private-class-text">
{/* <img src="../private.png" style={{width: "300px"}}></img> */}
        
        <h1>Private Classes</h1>
        
<h5>Personalised sessions are great for beginners and advanced practitioners alike. <br></br>
With one-on-one attention, you can work towards a specific goal and learn ways <br></br>
to build your practice based on your specific needs.</h5>

<h5>Book your private class with one of our teachers, online or in person, 
 private<br></br> classes for up to 6 people.
 Beginners will be introduced to the fundamentals <br></br> of yoga and Pilates 
 (postures, breath, philosophy) 
 and can ask questions, <br></br> break down postures and 
 receive explicit alignment instructions.<br></br></h5>

 <h5>For those wanting to advance your practice, 
 you will receive the teacher’s undivided <br></br>attention as you explore postures, work through
 any obstacles and go deeper into <br></br>your practice than you might do in a public class.
 Send us an email for more information</h5> 
 
 <h5 className="email-private">kulalisbon@gmail.com</h5>
</div>
        </>
    )
}

export default PrivateClass;