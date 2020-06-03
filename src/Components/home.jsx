import React, { Component } from 'react';
import Newuser from './newuser';
import Search from './search';

class Home extends Component {
    state = { userDetails:[],
    error:null,
    viewForm: false }
    componentDidMount(){
        fetch("https://randomuser.me/api/0.8/?results=20")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({ userDetails:result.results
              });
              console.log(this.state.userDetails);
              localStorage.setItem('userDetails', JSON.stringify(this.state.userDetails));
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
    }
    clickHandler=()=>{
        this.setState({ viewForm: true });
    }
    
    render() { 
        return (
             <div>
            <div className='row'> 
            {this.state.viewForm?"":<button className="btn btn-primary" onClick={this.clickHandler}>Create Newuser</button>}
            <div className='col-sm-5'>{this.state.viewForm?<Newuser/>:""}</div>
            <div className='col-sm-5'><Search/></div></div>
            <h1>Users</h1>
            <div class="row">
            {this.state.userDetails.map((user)=>{
            return(
                <div class="col-sm-4 pt-3">
                <div class="card" style={{width: 288}}>
                <img src={user.user.picture.thumbnail} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{user.user.name.title} {user.user.name.first} {user.user.name.last}</h5>
                   
                    <p class="card-text">{user.user.email}</p>
                    <p class="card-text">contact: {user.user.cell}</p>
                    <a href="#" class="btn btn-primary">View More</a>
                </div></div></div>
               
            );
        })}
            </div>
            </div>);
    }
}
 
export default Home;