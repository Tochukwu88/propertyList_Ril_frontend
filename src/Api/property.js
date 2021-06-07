import fetch from 'isomorphic-fetch'
import { API } from '../config'
import queryString from 'query-string'


export const listProperty = (agentId,token,data)=>{
    
    return(
    fetch(`${API}/list/${agentId}`,{
        method:'POST',
        headers:{
           
           
            
            Authorization: `Bearer ${token}`
        },
        body:data
    }).then(response =>{
        return response.json()
    }).catch(err =>{
        console.log(err)
    })

    )
}

export const getProperties = () =>{
  return(
    fetch(`${API}/properties`,{
        method:'GET'
    }).then(response =>{
        return response.json()
    }).catch(err =>{
        console.log(err)
    })
  )
}
export const singleProperty = (propertyId) =>{
    
    return(
      fetch(`${API}/property/${propertyId}`,{
          method:'GET'
      }).then(response =>{
          return response.json()
      }).catch(err =>{
          console.log(err)
      })
    )
  }
  export const propertyBySearch = (location) =>{
    const query =       queryString.stringify(location)
    return(
      fetch(`${API}/search/?${query}`,{
          method:'GET'
      }).then(response =>{
          return response.json()
      }).catch(err =>{
          console.log(err)
      })
    )
  }