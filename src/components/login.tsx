import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';


function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  function formsubmit(e:any){
e.preventDefault();
alert("submitted succesfully")
setPassword("")
setEmail("")

  }

  

  return (
    <div>
      <h1 className='text-center'>Login</h1>
      <div className="container">
      
        <div className="row">
        <div className="col-md-3"></div>
          <div className="col-md-6">
         <form onSubmit={formsubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name = "email" value={email}  className="form-control" onChange={(e)=>setEmail(e.target.value)}  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name = "password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"  />
  </div>
 
  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>



          </div>
          <div className="col-md-3">
          <p>{JSON.stringify(email)}</p>
    <p>{JSON.stringify(password)}</p>


          </div>
        </div>
      </div>

    
    </div>
  )
}

export default Login