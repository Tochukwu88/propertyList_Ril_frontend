import React, {useState} from 'react'
import {createLocation} from '../Api/location'

const Location = () =>{
 const [values,setValues] = useState({
     location:'',
     error:''
 })
 const {location} = values
  const handleSubmit=(e) =>{
      e.preventDefault()
      console.log(location)
      createLocation(location).then(response =>{
          console.log(response)
      })
  }
  const handleChange = name=>(e)=>{
      setValues({...values,[name]:e.target.value})
  }
  const createLocationForm = ()=>{
     return( <form onSubmit={handleSubmit}>
      <input type='text' value={location} onChange={handleChange('location')} placeholder='create location'/>
      <button type='submit'>create</button>
      </form>)
  }

    return(<>
        {createLocationForm()}
    </>)
}
export default Location