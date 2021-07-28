import React from "react";
import { signup } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(this.state);
      toast.success("Sign up successful");
      this.props.history.push("/login");
    } catch (e) {
      toast.error("Not possible to signup");
    }
  };

  render() {
    const { username, password, email} = this.state;
    return (
      <>


<section class="h-100 gradient-form" style={{backgroundColor: "#fff2f6"}}>
  <div class="container py-5 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-11">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="../kula_heart.png" style={{width: "250px" }}alt="logo"></img>
                  <h4 class="mt-1 mb-5 pb-1">We Are Kula</h4>
                </div>

                <form onSubmit={this.handleFormSubmit}>
                  <p>Sign Up Here</p>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example11"></label>
                    <input 
                    placeholder="Username"
                     type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={username}/>
                    
                  </div>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example22"></label>
                    <input 
                    placeholder="Email"
                    type="text"
                     name="email"
                     onChange={this.handleChange}
                     value={email}/>
                    
                  </div>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example22"></label>
                    <input 
                    placeholder="Password"
                    type="password"
                     name="password"
                     onChange={this.handleChange}
                     value={password}/>
                    
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" id="log-in-button">Sign Up</button>
                  </div>

                  <p>
                  Already have an account? <NavLink to="/login" id="create-new-button">Login</NavLink>
                  </p>

                 

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          required/>

          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={email}
          required/>

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          required />

         
          <button type="submit">Signup</button>
        </form> */}

      </>
    );
  }
}
export default Signup;
