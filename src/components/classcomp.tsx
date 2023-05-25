import axios from 'axios'
import React, { Component } from 'react'

export default class classcomp extends Component {
    
    
    state ={
        data : 25
      }
   
      componentDidMount(): void {
      let  url = "https://jsonplaceholder.typicode.com/posts" 
   
        axios.get(url).then((res:any)=>{
          console.log(res.data)
        }).catch((err:any)=>{
          console.log(err)
        });
    
   
      }
    update(){
     this.setState({data:this.state.data+1})
    }
  render() {
   
    return (
      <div>
  <h1>classcomp</h1>

  <h1>{this.state.data}</h1>
  <button onClick={()=>this.update()}>update</button>

  

      </div>
    )
  }
}
