import fetch from 'isomorphic-fetch'
import { API } from '../config'


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