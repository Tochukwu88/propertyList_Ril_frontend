import React ,{useState} from 'react'
import {register} from '../Api/auth'



const Register = () =>{
    const [values, setValues] = useState({
        fullName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const {fullName,email,password, confirmPassword} = values
    const handleSubmit =(e) =>{
        e.preventDefault()
        const agent ={fullName,email,password,confirmPassword}
        
        
        register(agent).then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
            setValues({...values,fullName:'',email:'',password:'',confirmPassword:'',})
            }
            
        })
    }
    const handleChange= name => (e) =>{
        setValues({...values,[name]:e.target.value})
    }
    const registerForm = () =>{
        return(
            <form onSubmit={handleSubmit}>
                <input value={fullName} onChange={handleChange('fullName')} type='text' placeholder='full name'></input>
                <input value={email} onChange={handleChange('email')}  type='email' placeholder='email'></input>
                <input value={password}  onChange={handleChange('password')} type='password' placeholder='password'></input>
                <input value={confirmPassword}  onChange={handleChange('confirmPassword')} type='password' placeholder='confirm password'></input>
                <button type='submit'>register</button>
            </form>
        )
    }
    
    return(
        <>
            register agent
            {registerForm()}
        </>
    )

}
export default Register 