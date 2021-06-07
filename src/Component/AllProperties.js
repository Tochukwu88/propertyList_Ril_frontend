import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getProperties } from '../Api/property'

const  AllProperties = () =>{
    const[properties, setProperties] = useState([])
    const loadProperty = ()=>{
        getProperties().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
           
          setProperties(data)
            }
            
        })
    
    }
    useEffect(()=>{loadProperty()},[])
    return(
        <>
            {properties.map(property =>{
                {console.log(property.type)}
              return(
                  <div>
                  <h5><Link to={`/property/${property._id}`}>{property.type}</Link></h5>
                  <h6>{property.price}</h6>
                  <hr></hr>
                  </div>
              
                

              )  
            })}
        </>
    )
}

export  default AllProperties