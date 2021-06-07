import React, { useEffect, useState } from 'react'
import { singleProperty } from '../Api/property'
import { API } from '../config'




const SingleProperty =(props)=>{
    const [property, setProperty] = useState({})

    const loadSingleProperty = (propertyId) =>{
        singleProperty(propertyId).then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
                setProperty(data)
            }
        })
    }
    useEffect(()=>{
     const   propertyId =  props.match.params.propertyId
       console.log( propertyId)
       loadSingleProperty(propertyId)
    },[])
    return(
        <>
         
             
                 <div>
                 {console.log(property.photo)}
                 {property.photo.map(p=>{
                     return(
                         <img  src={`${API}/${p}`} alt='img'></img>
                     )
                 })}
                     <h6>{property.type}</h6>
                     <h5>{property.price}</h5>
                     <h4>{property.overview}</h4>
                     <h4>{property.bed}</h4>
                     <h4>{property.bath}</h4>
                     <h4>{property.room}</h4>
                     <h4>{property.area}</h4>
                     {/* {console.log(property.location.formattedAddress)} */}
                     {/* <h4>{property.location.formattedAddress}</h4> */}
                     
                     {/* <h4>{property.location.city}</h4>
                     <h4>{property.location.country}</h4> */}
                 </div>
             
         
        </>
    )
}
export default SingleProperty