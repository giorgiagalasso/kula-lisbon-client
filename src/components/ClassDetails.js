import React from "react";
import { getClass, deleteClass } from "../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

class ClassDetails extends React.Component {
  state = {
    id: "",
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    teacher: "",
    category: "",
  };

  async componentDidMount() {
    const response = await getClass(this.props.match.params.id);
    console.log(response.data)
    this.setState({
      id: response.data._id,
      title: response.data.title,
      description: response.data.description,
      imageUrl: response.data.imageUrl,
      price: response.data.price,
      teacher: response.data.teacher,
      category: response.data.category,
    });
    console.log(this.state);
  }

  handleDeleteClass = async () => {
    await deleteClass(this.state.id);
    toast.success("Class deleted.");
    this.props.history.push("/");
  };

  render() {
    const { id, title, description, imageUrl, price, teacher, category } = this.state;
    return (
      <>
       {imageUrl && (
          <img style={{ width: "100px" }} src={imageUrl} alt="project" />
        )}
        <h2>{title}</h2>
        <h2>{teacher}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{category}</p>
        
        <div>
          <button onClick={this.handleDeleteClass}>Delete Class</button>
          <button
            onClick={() => {
              this.props.history.push(`/classes/${id}/edit`);
            }}
          >
            Edit
          </button>
          <NavLink to={`/classes/${id}/edit`}>Edit Class</NavLink>
        </div>
      </>
    );
  }
}

export default ClassDetails;
