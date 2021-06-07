import React ,{useEffect, useState} from 'react'

import {listProperty} from '../Api/property'
import { authCheck } from '../Api/auth'

const ListProperty = () =>{
    const [ values, setValues] = useState({
        type:'',
        address:'',
        overview:'',
        price:'',
        photos:'',
        bed:'',
        room:'',
        bath:'',
        area:'',
        city:'',
        state:'',
        country:'',
        agentId:'',
        formData:''
        
        
    })
    const {type,address,overview,price,bed,room,bath,area,agentId,photos,formData,city,state,country} = values
  const {token, agent}  = authCheck() 
    const handleChange = name => ( e)  =>{
        e.preventDefault()
        const value = name ===  'photos'? e.target.files: e.target.value
        setValues({...values, [name]:value})
      

    }
 const handleSubmit = (e) =>{
     e.preventDefault()
     console.log(values)
    
     formData.append('type',type)
     formData.append('address',address)
    
     formData.append('price',price)
     formData.append('bed',bed)
     formData.append('overview',overview)
     formData.append('room',room)
     formData.append('bath',bath)
     formData.append('agent',agentId)
     formData.append('city',city)
     formData.append('state',state)
     formData.append('country',country)
     formData.append('area',area)
    
     for (let i = 0; i < photos.length; i++) {
        formData.append('photos', photos[i]);                      
    }
   listProperty(agent._id,token,formData)
   console.log(agentId)
      
 

     

     
        
     
        
    }
    useEffect(()=>{setValues({...values,agentId:agent._id,formData:new FormData()})},[])
    const propertyForm = () =>{
        return(
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <input name='photos' type='file' onChange={handleChange('photos')} multiple/>
            <input value={type} type='text' onChange={handleChange('type')} placeholder='type'/>
            <input value={address} type='text' onChange={handleChange('address')} placeholder='address'/>
            <input value={city} type='text' onChange={handleChange('city')} placeholder='city'/>
            <input value={state} type='text' onChange={handleChange('state')} placeholder='state'/>
            <input value={country} type='text' onChange={handleChange('country')} placeholder='country'/>
            <input value={overview} type='text' onChange={handleChange('overview')} placeholder='overview'/>
            <input value={price} type='number' onChange={handleChange('price')} placeholder='price'/>
            <input value={bed} type='number' onChange={handleChange('bed')} placeholder='number of bed'/>
            <input value={room} type='number' onChange={handleChange('room')} placeholder='number of rooms'/>
            <input value={bath} type='number' onChange={handleChange('bath')} placeholder='number of bath'/>
            <input value={area} type='number' onChange={handleChange('area')} placeholder='area of the property'/>
            <button type='submit'>submit</button>


            </form>
        )
    }


    return(
        <>
            <h1>list property</h1>
            {propertyForm()}
        </>
    )
}
 export default ListProperty