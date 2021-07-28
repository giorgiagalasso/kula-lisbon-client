import React from "react";
import { addClass, uploadFile } from "../api";
import { toast } from "react-toastify";
import "../App.css"

class AddClass extends React.Component {
  state = {
    imageURL: "",
    title: "",
    description: "",
    price: "",
    teacher: "",
    
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

    const newClass = {
      imageUrl: response.data.fileUrl,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      teacher: this.state.teacher,
      category: this.state.category,
    };

    await addClass(newClass);

    toast.success("Class created");
    this.props.history.push("/");
  };

  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  render() {
    const { title, description, price, teacher } = this.state;
    return (
      <>
        <h2>Add Class</h2>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Title</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="title"
            value={title}
          />
          <label>Description</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="description"
            value={description}
          />

         <label>Price</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="price"
            value={price}
          />

          <label>Teacher</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="teacher"
            value={teacher}
          />

          <label>Image</label>
          <input type="file" name="image" onChange={this.handleChangeFile} />
          
          <button type="submit">Create Class</button>
        </form>
      </>
    );
  }
}

export default AddClass;
