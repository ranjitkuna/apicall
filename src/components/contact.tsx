import React, { useEffect, useState } from 'react'
import { ApiService } from '../services/services'

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiService.get('posts')
      .then((responseData:any) => {
        setData(responseData);
        console.log(responseData)
      })
      .catch((error:any) => console.error(error));
  }, []);

  return (
    <div>
  
  {
    data.map((alldata:any)=>
        <ul>
          <li>{alldata.id}</li>
          <li>{alldata.title}</li>
          <li>{alldata.body}</li>
        </ul>
    )
  }

    </div>
  )
}

export default Contact