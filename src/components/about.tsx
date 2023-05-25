import React, { useEffect, useState } from 'react'
import Aboutchild from './aboutchild'
import { ApiService } from '../services/services';
import Aboutclass from './aboutclass';

function About() {
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
      <h1>this is about component</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <Aboutchild newdata = "sanjit rautaray" />
          </div>
          <div className="col-md-6">
            <Aboutclass mydata = "ranjit rautaray" />
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default About