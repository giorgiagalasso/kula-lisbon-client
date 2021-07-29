import React from "react";
import { updateTeacher, getTeacher } from "../api";
import { toast } from "react-toastify";


class UpdateTeacher extends React.Component {
  state = {
    id:"",
    style: "",
    imageUrl: "",
    description: "",
    teacher: "",
   
  };

  async componentDidMount() {
    const response = await getTeacher(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      style: response.data.style,
      imageUrl: response.data.imageUrl,
      description: response.data.description,
      teacher: response.data.teacher,
     
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateTeacher(this.state);
    toast.success("Teacher updated");
    this.props.history.push(`/teachers/${this.state.id}`);
  };

  render() {
    const {imageUrl, description, teacher, style } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
         <label>Image</label>
        <input
          type="text"
          name="imageUrl"
          onChange={this.handleChange}
          value={imageUrl}
        />
        
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        />

        <label>Teacher</label>
        <input
          type="text"
          name="teacher"
          onChange={this.handleChange}
          value={teacher}
          />

        <label>Style</label>
        <input
          type="text"
          name="style"
          onChange={this.handleChange}
          value={style}
          />
        
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default UpdateTeacher;
