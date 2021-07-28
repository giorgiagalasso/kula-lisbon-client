import React from "react";
import { getAllClasses } from "../api";
import { NavLink } from "react-router-dom";

class ListClasses extends React.Component {
  state = {
    classes: [],
  };

  async componentDidMount() {
    const response = await getAllClasses();
    this.setState({
      classes: response.data,
    });
  }

  render() {
    return (
      <>
        <h2>Class Schedule</h2>
        <ul>
          {this.state.classes.map((item) => {
            return (
              <li key={item._id}>
                <NavLink to={`/classes/${item._id}`}>
                  {item.title} 
                </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ListClasses;
