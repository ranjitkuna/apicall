import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import "../scss/home.scss";
import axios from "axios";
import AOS from 'aos';
import { ApiService } from '../services/services';


function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)


  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "50px",
    fontSize:"100px",
    fontFamily: "Sans-Serif"
  };
  let url = "https://jsonplaceholder.typicode.com/posts" 
  
 function fetchingalldetails(){
  axios.get(url).then((res)=>{
    setUsers(res.data)
  }).catch((err)=>{
    console.log(err)
  })
 
 }
 
  useEffect(() => {
    AOS.init();
    setLoading(true)
    setTimeout(() => {
      fetchingalldetails()
      setLoading(false)
    }, 2000);
   
  }, [])

 
  
  return (
    <div className='my-5 text-center bg-info text-white '>
     <div className="container-fluid">
      <div className="row">
      <div className="col-lg-6">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="15000">

        
        <h2  >first heading</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <h2>second heading</h2>
      </div>
      </div>
     </div>

   
      <div>
    
      <h1 >api call to different api call</h1>
     
      </div>
      
      
  
    <div>
  {
    loading ? <div>Loading ........</div> : <div> <div className="container">
    <table className="table text-center">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">body</th>
      
      </tr>
    </thead>
   
    {
    users.map((alldata:any)=>( 
    
       < >
       
        
       <tbody>
  <tr >
    <th scope="row">{alldata.id}</th>
    <td>{alldata.title}</td>
    <td>{alldata.body}</td>
   
  </tr>
 
  </tbody>

       </>
       
  
 
    ))
  }

</table>
</div>
</div>
  }
  </div>
<Outlet></Outlet>

    </div>
  )
}


export default Home