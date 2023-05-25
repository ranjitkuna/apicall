import React from 'react'

function Child(p:any) {
    let newdata = "bhai"
  return (
    <div>
   <h1>child</h1>
  
   <button onClick={()=>{p.name(newdata)}}>child to parent</button>

    </div>
  )
}

export default Child