import React from "react";
import { NavLink } from "react-router-dom";
import { getAllClasses } from "../api";
import "../App.css";

export const About = () =>  {
    
        return(
          <>

    <div className="about-page-everything">
    
            <div className="about-text">
            
            <h1>Our Community & Our Values</h1>
    
    <h4><i>Who We Are, What We Stand For And What We Strive To Spread</i></h4>
    
    <div className="values-text">
    <h5>The word yoga derives from the Sanskrit work ‘Yuj’ meaning to join or to yoke.<br></br></h5>
    
    <h5>We want to create a space where people from every background can join together in the practice of Yoga.<br></br></h5>
    
    <h5>A space where when you enter you leave your phones, minds and worries behind, just for a little while.<br></br></h5>
    
    <h5>In this space we value respect for one another, we try to impose ourselves to not judge ourselves or one another.<br></br></h5>
    
    <h5>Kula, means community, tribe, to come together and to practice yoga but what is yoga but physical movement<br></br></h5>
    
    <h5>We must continously remind ourselves of the deapths of this practice, the breath, the stepping away from the mind,</h5>
    
    <h5>The continous work towards the best version of ourselves and what better way to do this but to be part of a community</h5>
    
    <h5>When you want to and how you want to.</h5>
    
    <h5>Be Kind, Be Kula<br></br></h5>


    </div>
    </div>
    <div>
    <img className="space-about" src="../kula_heart.png" style={{width: "100px"}}></img>
    </div>
    </div>




    
            </>
        )
    
}

export default About;