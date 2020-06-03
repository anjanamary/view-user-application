import React, { Component } from "react";

class Newuser extends Component {
  state = {
    user: [],
    title:"",
    first:"",
    last:"",
    gender:"",
    dob:"",
    username:"",
    password:"",
    email:"",
    phone:"",
  };
  inputHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
    console.log(event.target.name);
  };
  handleSubmit = event =>{
    event.preventDefault();
    let users=this.state.user;
    const userDetails={
     user:{
      name:{
        title:this.state.title,
        first: this.state.first,
        last: this.state.last
      },
      gender:this.state.gender,
      dob:this.state.dob,
      username:this.state.username,
      password:this.state.password,
      email:this.state.email,
      phone:this.state.phone
     } 
    };
    users.push(userDetails);
    this.setState({ user: users });
    console.log(this.state.user);
    localStorage.setItem('newUser', JSON.stringify(this.state.user));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label for="inputnametitle" >Title</label>
            <input type="text" className="form-control" id="inputnametitle" name="title" onChange={this.inputHandler}/>
          </div>
          <div className="form-group col-md-4">
            <label for="inputFirstname" >FirstName</label>
            <input type="text" className="form-control" id="inputFirstname" name="first" onChange={this.inputHandler}/>
          </div>
          <div className="form-group col-md-4">
            <label for="inputLastname" >LastName</label>
            <input type="text" className="form-control" id="inputLastname" name="last" onChange={this.inputHandler}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputgender" >Gender</label>
            <input type="text" className="form-control" id="inputgender" name="gender" onChange={this.inputHandler}/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputDOB" >DOB</label>
            <input type="text" className="form-control" id="inputDOB" name="dob" onChange={this.inputHandler}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputUsername" >Username</label>
            <input type="text" className="form-control" id="inputUsername" name="username" onChange={this.inputHandler}/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword" >Password</label>
            <input type="password" className="form-control" id="inputPassword" name="password" onChange={this.inputHandler}/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputEmail" >Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            placeholder="xxx@gmail.com"
            onChange={this.inputHandler} 
          />
        </div>
        <div className="form-group">
          <label for="inputmobile" >Phone</label>
          <input type="text" className="form-control" name="phone" id="inputmobile" onChange={this.inputHandler}/>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default Newuser;
