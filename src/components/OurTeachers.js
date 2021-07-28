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

    return (
    <>
    <h1>Our teachers</h1>

    <ul>
          {this.state.teachers.map((teacher) => {
            return (
              <li key={teacher._id}>
                <NavLink to={`/teachers/${teacher._id}`}>
                  {teacher.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
    </>
)
    }
}

export default OurTeachers;