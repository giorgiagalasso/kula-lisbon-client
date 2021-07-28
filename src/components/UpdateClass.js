import React from "react";
import { updateClass, getClass } from "../api";
import { toast } from "react-toastify";


class UpdateClass extends React.Component {
  state = {
    id:"",
    imageUrl: "",
    title: "",
    description: "",
    price: "",
    teacher: "",
    category: "",
  };

  async componentDidMount() {
    const response = await getClass(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      imageUrl: response.data.imageUrl,
      title: response.data.title,
      description: response.data.description,
      price: response.data.price,
      teacher: response.data.teacher,
      category: response.data.category,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateClass(this.state);
    toast.success("Class updated");
    this.props.history.push(`/classes/${this.state.id}`);
  };

  render() {
    const {imageUrl, title, description, price, teacher } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
         <label>Image</label>
        <input
          type="text"
          name="imageUrl"
          onChange={this.handleChange}
          value={imageUrl}
        />
        
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={title}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        />

       <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />

        <label>Teacher</label>
        <input
          type="text"
          name="teacher"
          onChange={this.handleChange}
          value={teacher}
          />
        
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default UpdateClass;
