import React, { useEffect, useState } from 'react'
import { ApiService } from '../services/services';
import { NewApiService } from '../services/newService';
import "../scss/apicall.scss"

function Apicall() {
  const[data,setData] =  useState([])

  useEffect(()=>{
 
   NewApiService.get("posts").then((res)=>{
    setData(res)
    console.log(res)
   }).catch((err)=>{
    console.log(err)
   })
 
  },[])
  return (
    <div>
   
   <h1>this is apicall components</h1>
   {
    data.map((alldata:any)=>
       
      <>
      <h1>{alldata.title}</h1>
      <h1>{alldata.id}</h1>
      <h1>{alldata.body}</h1>
      </> 
        
        )
   }

    </div>
  )
}

export default Apicall