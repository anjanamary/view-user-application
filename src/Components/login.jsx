import React, { Component } from "react";
import {getUser} from '../Services/authenticationMock';
import {Redirect} from "react-router-dom";
import history from './../history';

class Login extends Component {
  state = {
    username: "",
    password: "",
    isUserInvalid: "",
  };
  inputHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  submitHandler=event =>{
      const userObj=getUser(this.state.username);
      console.log("serObj:",userObj);
      if(userObj===undefined){
        this.setState({ isUserInvalid: true });
        }else{
            if(userObj.password===this.state.password){
                this.setState({ isUserInvalid: false });
                console.log("success")
                history.push('/home');
            }
        }
  }
 
  render() {
    return (

       <div>
        {this.state.isUserInvalid?<div className="alert alert-danger">"Invalid credentials please try again"</div>:""}
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="userNameLabel">Username</label>
          <input
            type="username"
            className="form-control"
            id="inputuserName"
            name="username"
            onChange={this.inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordLabel">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            onChange={this.inputHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    );
  }
}

export default Login;
