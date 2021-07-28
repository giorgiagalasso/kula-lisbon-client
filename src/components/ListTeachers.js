import React from "react";
import { getAllTeachers } from "../api";
import { NavLink } from "react-router-dom";

class ListTeachers extends React.Component {
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
        <h2>Teacher Schedule</h2>
        <ul>
          {this.state.teachers.map((item) => {
            return (
              <li key={item._id}>
                <NavLink to={`/teachers/${item._id}`}>
                  {item.teacher} 
                </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ListTeachers;
