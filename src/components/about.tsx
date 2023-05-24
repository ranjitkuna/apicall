import React, { Component } from 'react'

type MyState = {
  count: number; // like this
};
type Myname = {
  name:string;
}

export default class About extends Component {

  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  
  newstate: Myname = {
    // optional second annotation for better type inference
    name: "ranjit",
  };
  
  updatestate(){
 this.setState({count:this.state.count+1})
  }


  render() {
    return (
      <div>
       <h1>About Us</h1>
    <p className='text-center'> {this.state.count}</p>
    <button onClick={()=>this.updatestate()}>click here</button>
    <p className='text-center'> {this.newstate.name}</p>
      </div>
    )
  }
}
