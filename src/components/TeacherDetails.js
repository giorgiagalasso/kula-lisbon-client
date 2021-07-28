import React from "react";
import { getTeacher, deleteTeacher } from "../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

class TeacherDetails extends React.Component {
  state = {
    id: "",
    teacher: "",
    description: "",
    imageUrl: "",
  };

  async componentDidMount() {
    const response = await getTeacher(this.props.match.params.id);
    console.log(response.data)
    this.setState({
      id: response.data._id,
      teacher: response.data.teacher,
      description: response.data.description,
      imageUrl: response.data.imageUrl,
    });
    console.log(this.state);
  }

  handleDeleteTeacher = async () => {
    await deleteTeacher(this.state.id);
    toast.success("Teacher deleted.");
    this.props.history.push("/");
  };

  render() {
    const { id, description, imageUrl, teacher} = this.state;
    return (
      <>
       {imageUrl && (
          <img style={{ width: "100px" }} src={imageUrl} alt="project" />
        )}
        <h2>{teacher}</h2>
        <p>{description}</p>
        
        <div>
          <button onClick={this.handleDeleteTeacher}>Delete Teacher</button>
          <button
            onClick={() => {
              this.props.history.push(`/teachers/${id}/edit`);
            }}
          >
            Edit
          </button>
          <NavLink to={`/teachers/${id}/edit`}>Edit Teacher</NavLink>
        </div>
      </>
    );
  }
}

export default TeacherDetails;
