import React ,{useState} from 'react'
import {authourize, login} from '../Api/auth'



const Login = () =>{
    const [values, setValues] = useState({
        
        email:'',
        password:'',
        
    })
    const {email,password } = values
    const handleSubmit =(e) =>{
        e.preventDefault()
        const agent ={email,password}
        
        
        login(agent).then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
                authourize(data,()=>{console.log('done')})
            setValues({...values,email:'',password:'',})
            }
            
        })
    }
    const handleChange= name => (e) =>{
        setValues({...values,[name]:e.target.value})
    }
    const loginForm = () =>{
        return(
            <form onSubmit={handleSubmit}>
                
                <input value={email} onChange={handleChange('email')}  type='email' placeholder='email'></input>
                <input value={password}  onChange={handleChange('password')} type='password' placeholder='password'></input>
                    <button type='submit'>login</button>
            </form>
        )
    }
    
    return(
        <>
            login agent
            {loginForm()}
        </>
    )

}
export default Login