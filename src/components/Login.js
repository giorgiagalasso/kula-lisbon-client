import React from "react";
import { login } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(this.state);
      this.props.setLoggedInUser(user.data);
      toast.success("Login Successfull 👏");
      this.props.history.push("/");
    } catch (e) {
      toast.error("Invalid login");
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
     <section class="h-100 gradient-form" style={{backgroundColor: "#fff2f6"}}>
  <div class="container py-5 h-100">
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
                  <p>Please login to your account</p>

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
                    placeholder="Password"
                    type="password"
                     name="password"
                     onChange={this.handleChange}
                     value={password}/>
                    
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" id="log-in-button">Log in</button>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn"><a id="create-new-button" href="/signup">Sign Up Here</a></button>
                  </div>

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
 
         <div className="loginform">
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          </div>

          <div className="loginform">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">Login</button>
    </div>   
    
     </form>

        <p>
          Don't have an account? <NavLink to="/signup">Signup</NavLink>
        </p>  */}
      </>
    );
  }
}

export default Login;
