import fetch from 'isomorphic-fetch'
import { API } from '../config'
import cookie from 'js-cookie'

export const register =  ( agent ) =>{
    console.log(agent)
    return(
       
    fetch(`${API}/register`,{
        method:'POST',
        headers:{
            Accept:'Application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(agent)
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        console.log(err)
    })


    )
}
export const login =  ( agent ) =>{
    return(
    fetch(`${API}/login`,{
        method:'POST',
        headers:{
            Accept:'Application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(agent)
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        console.log(err)
    })


    )
}
export const setCookie =(key,value) =>{
    if(typeof window !== 'undefined'){
        cookie.set(key,value,{
            expires:1
        })
    }
}
export const getCookie = (key)=>{
    if(typeof window !== 'undefined'){
      return  cookie.get(key)
    }
}
export const setlocalStorage= (key,value) =>{
    if(typeof window !== 'undefined'){
       localStorage.setItem(key,JSON.stringify(value))
    }
}
export const authourize =(data,next) =>{
    setCookie('token',data.token)
    setlocalStorage('agent',data)
    next()
}
export const authCheck = ()=>{
    if(typeof window !== 'undefined'){
        const checkCookie = getCookie('token')
        if(checkCookie){
            if(localStorage.getItem('agent')){
                
                    return JSON.parse(localStorage.getItem('agent'))
                   
            }else{
                return false
            }
        }
    }
}