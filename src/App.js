import "./App.css";
import ListClasses from "./components/ListClasses";
import AddClass from "./components/AddClass";
import Navbar from "./components/Navbar";
import ClassDetails from "./components/ClassDetails";
import UpdateClass from "./components/UpdateClass";

import AddTeacher from "./components/AddTeacher";
import ListTeachers from "./components/ListTeachers";
import TeacherDetails from "./components/TeacherDetails";
import UpdateTeacher from "./components/UpdateTeacher";

import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Schedule from "./components/Schedule";
import ClassDescription from "./components/ClassDescription";
import CovidGuidelines from "./components/CovidGuidelines";
import PrivateClass from "./components/PrivateClass";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Workshop from "./components/Workshops";
import OurTeachers from "./components/OurTeachers";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import React from "react";

import { loggedIn } from './api';
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  setLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };

  async componentDidMount() {
    const response = await loggedIn();
    if (!this.state.loggedInUser) {
      if (response.data._id) {
        this.setLoggedInUser(response.data);
      }
    }
  }

  render() {
    return (
      <>
      <div className="App">
        <ToastContainer />
        
        <Navbar loggedInUser={this.state.loggedInUser} setLoggedInUser={this.setLoggedInUser} />
        <Switch>

          {/* NAV ROUTES */}
          <Route exact path={ "/"} render={(props) => {
              return (
                <Home {...props} user={this.state.loggedInUser} />
              ); 
              }}
             />

          <Route exact path={ "/about"} component={About} />

          <Route exact path={ "/teachers"} component={OurTeachers} />

          <Route exact path={ "/schedule"} component={Schedule} />

          <Route exact path={ "/classdescription"} component={ClassDescription} />

          <Route exact path={ "/privateclass"} component={PrivateClass} />

          <Route exact path={ "/contact"} component={Contact} />

          <Route exact path={ "/covidguidelines"} component={CovidGuidelines} />

          <Route exact path={ "/workshop"} component={Workshop} />
          
          {/* CLASSES, ADDING AND REMOVING */}

          <Route exact path={ "/classes"} component={ListClasses} />
        
          <Route exact path="/classes/add" component={AddClass}/>
          
          <Route exact path="/classes/:id" component={ClassDetails} />
          
          <Route exact path="/classes/:id/edit" component={UpdateClass} />

           
           {/* TEACHERS, ADDING AND REMOVING */}

          <Route exact path="/teachers/add" component={AddTeacher} />
          
          <Route exact path={"/teachers"} component={ListTeachers} />

          <Route exact path="/teachers/:id" component={TeacherDetails} />

          <Route exact path="/teachers/:id/edit" component={UpdateTeacher} />


          
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/login"
            render={(props) => {
              return <Login {...props} setLoggedInUser={this.setLoggedInUser} />;
            }}
          />
        </Switch>
        <Footer />
      </div>
      </>
    );
  }
}

export default App;
