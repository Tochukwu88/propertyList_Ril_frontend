import React, { useState } from 'react'
import { propertyBySearch } from '../Api/property'


const Search = () =>{
    const [search , setSearch] = useState()
    const handleChange = async (e) =>{
        e.preventDefault()
        
        
        await setSearch(e.target.value);
    
    }
 const handleSubmit = (e) =>{
     e.preventDefault()
     console.log(search)
     propertyBySearch({city:search}).then(data=>{
         if(data.error){
             console.log(data.error)
         }else{
             console.log(data)
         }
     })
 }

    const searchForm = () =>{
        return(<form onSubmit={handleSubmit}>
            <span> 
          
            
             <input type='search'   onChange={handleChange} placeholder='search by city'></input>
             <button >search</button>
             </span>
          </form>)
    }

    return(<>
        {searchForm()}
    </>)
}

export default Search