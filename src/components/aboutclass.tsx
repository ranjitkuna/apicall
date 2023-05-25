import React, { Component } from 'react'
interface typedata{
    mydata:string;
}

export default class Aboutclass extends Component<typedata> {
    constructor(props:any){
        super(props)
    }
  render() {
    return (
      <div>
        <h1>Aboutclass</h1>
        <p>{this.props.mydata}</p>
      </div>
    )
  }
}
