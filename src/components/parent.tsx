import React, { useState } from 'react'
import Child from './child'
import axios from 'axios'

function Parent() {
    const [users, setUsers] = useState([])
    const [dat, setDat] = useState("")
  const [loading, setLoading] = useState(false)

    let url = "https://jsonplaceholder.typicode.com/posts" 
  
    function fetchingalldetails(){
     axios.get(url).then((res:any)=>{
       setUsers(res.data)
     }).catch((err:any)=>{
       console.log(err)
     })
    
    }
 function data(d:any){
    console.log(d)
    setDat(d)
 }
  return (
    <div>
        
        <div className="container">
        <h1>parent</h1>
         <p>{dat}</p>

        <Child name={data} />

        </div>
        
    </div>
  )
}

export default Parent