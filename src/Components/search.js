import React, { Component } from 'react';

class Search extends Component {
    state = { searchVariable:"" ,
    isAvailable:null,
    user:null,
    }
    inputHandler = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        console.log(event.target.name);
      };
    searchHandler=()=>{
        let userDetails=localStorage.getItem('userDetails');
        userDetails=JSON.parse(userDetails);
        console.log("userDetails",userDetails);
        let user=userDetails.filter(u=>u.user.name.first===this.state.searchVariable)
        console.log("user::",user);
        if(user!=null){
            
        this.setState({ isAvailable: true });
        }
        this.setState({ user: user });

    }
    render() { 
        return (  <div><div className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="searchVariable" onChange={this.inputHandler}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchHandler}>Search</button>
      </div>
      {console.log("isAvailable",this.state.isAvailable)}
     {this.state.isAvailable? <div> {this.state.user.map((user)=>{return(<div className="card">
    <h5 className="card-header">{user.user.name.title} {user.user.name.first} {user.user.name.last}</h5></div>)})}</div>:""}
      </div>);
    }
}
 
export default Search;