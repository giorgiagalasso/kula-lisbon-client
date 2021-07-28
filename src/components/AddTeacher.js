import React from "react";
import { addTeacher, uploadFile } from "../api";
import { toast } from "react-toastify";

class AddTeacher extends React.Component {
  state = {
    teacher: "",
    description: "",
    imageURL: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const uploadData = new FormData();
    uploadData.append("image", this.state.imageUrl);

    const response = await uploadFile(uploadData);

    const newTeacher = {
      teacher: this.state.teacher,
      description: this.state.description,
      imageUrl: response.data.fileUrl,
    };

    await addTeacher(newTeacher);

    toast.success("Teacher created");
    this.props.history.push("/");
  };

  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  render() {
    const {  teacher, description} = this.state;
    return (
      <>
        <h2>Add Teacher</h2>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Teacher</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="teacher"
            value={teacher}
          />
          <label>Description</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="description"
            value={description}
          />

          <label>Image</label>
          <input type="file" name="image" onChange={this.handleChangeFile} />
          
          <button type="submit">Create Teacher</button>
        </form>
      </>
    );
  }
}

export default AddTeacher;
