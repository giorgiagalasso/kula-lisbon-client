import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { getAllTeachers } from "../api";

class OurTeachers extends React.Component {

    state = {
        teachers: [],
      };
    
      async componentDidMount() {
        const response = await getAllTeachers();
        this.setState({
          teachers: response.data,
        });
      }
    render() {
      const {user} = this.props;
      console.log(user)
    return (
    <>
    <div className="ourteachers">
    <h1>Our Team</h1>
    <h5><i>Hand Picked With Love For You</i></h5>
    <img className="ourteacherspage" src="../kula_heart.png" style={{width: "80px"}}></img>
</div>
  

    

    <p>
          {this.state.teachers.map((teacher) => {
            return (
              <h1 className="teachers-detail" key={teacher._id}>
                {(user && user.role == "Admin") && <NavLink to={`/teachers/${teacher._id}`}> Edit Teacher </NavLink>}
                
                 <div className="teachers-detail">
                 
                 <img src={teacher.imageUrl} style={{width: "200px"}}></img>
                   
                   <h3 className="teacher-name">{teacher.teacher}</h3>
                   <h5><i>{teacher.style}</i></h5>
                  
                  <div className="classdescription">
                  <h5 className="teachers-detail">{teacher.description}<br></br><br></br></h5>
                  </div>
                 </div> 
               
              </h1>
            );
          })}
        </p>
        


        {/* <div class="card" style="width: 18rem;">
        {this.state.teachers.map((teacher) => {
          return (
          <h1 className="teachers-detail" key={teacher._id}>
          {(user && user.role == "Admin") && <NavLink to={`/teachers/${teacher._id}`}> Edit Teacher </NavLink>}

  <img class="card-img-top" src={teacher.imageUrl} style={{width: "200px"}}/>
  
  <div class="card-body">
    <h5 class="card-title">{teacher.teacher}</h5>
    <h5><i>{teacher.style}</i></h5>
    
    <p class="card-text">{teacher.description}</p>
  </div>
  </h1>
  </div> */}

 




    </>
)
    }
}

export default OurTeachers;