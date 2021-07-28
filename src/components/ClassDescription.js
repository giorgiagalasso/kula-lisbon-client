import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const ClassDescription = () => {
    return(
        <>
      <div className="title-classdescription"> 
<h1>Choosing A Class </h1>
<h5><i>All classes are 75 minutes long, excluding early morning classes which are 60 minutes.</i></h5>
</div> 


<div className="different-styles">
<h3>
   Vinyasa Flow Yoga
</h3>
<h5>
Vinyasa Flow is a dynamic practice and one of the most popular forms of yoga 
in the world. <br></br>
Vinyasa is a technique that synchronises breath with movement so 
in this class you will flow <br></br> through a sequence of postures, which will differ 
teacher to teacher. It is a more fast paste & dynamic flow. 
</h5>
</div>


<div className="different-styles">
<h3>
   Flow & Restore
</h3>
<h5>
This nourishing class fuses the dynamism of a smooth vinyasa class, 
with the stillness of a deeply restorative  <br></br>  one. It begins with breath-led, 
alignment-based flow before transitioning into quieter work that balances  <br></br>  the
 nervous system with restorative and yin postures.
</h5>
</div>


<div className="different-styles">
<h3>
   Hatha Yoga
</h3>
<h5>
These classes focus on the fine details of yoga postures and breathing,
working on both your body and the mind.  <br></br> You’ll hold postures longer than 
in a flowing vinyasa class, so you can explore the technical aspects and 
the effects  <br></br> internally. Teachers of this class come from a variety of 
backgrounds and will have their own individual way of teaching.
</h5>
</div>

<div className="different-styles">
<h3>
  Meditation & Mindfulness
</h3>
<h5>
Meditation is the process of turning your attention inward 
with one-pointed focus, bringing about a sense of peace <br></br>and self-acceptance. 
There are many meditative practices and mindfulness is one where you 
anchor yourself into the present moment.   
    
</h5>
</div>

<div className="different-styles">
<h3>
  Yin Yoga
</h3>
<h5>
Yin yoga takes place on the floor and you’ll use props such as bolsters, 
blankets, foam bricks and blocks so your body  <br></br> can rest completely into a 
series of restorative postures. Living in the city can throw the nervous  
system off  <br></br> balance, and a restorative yoga class will help slow the heart 
rate down and allow the body and mind to rest fully 
</h5>
</div>
        </>
    )
}

export default ClassDescription;