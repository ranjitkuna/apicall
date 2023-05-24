import axios from "axios"

let url = "https://jsonplaceholder.typicode.com"

export const NewApiService = {
 
    get(nexturlpoint) {
      return  axios.get(`${url}/${nexturlpoint}`).then(res=>
         res.data
            
        ).catch(err=>console.log(err))

    }

}