import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from './Firebase'

const Signup = () => {
    const [name,setName] = useState("")
    const [signupemail,setSignupemail] = useState("")
    const [signuppass,setSignuppass] = useState("")
    const [data,setData] = useState([])
    const Nav = useNavigate()
    // useEffect(()=>{
    //     fetch("https://loginauthentication-99a77-default-rtdb.firebaseio.com/signupdetail.json",{
    //     method:'GET'})
    //     .then(res=>res.json())
    //     .then(data=>{
    //         let output = []
    //         for(let key in data){
    //             output.push(data[key])
    //         }
    //        setData(output) 
    //     })
    // })
    const addDetails = (e)=>{
        e.preventDefault()
        // const findDetails = data.find((value)=>{
        //     return value.signupemail===signupemail &&value.signuppass===signuppass
        // })
        // if(findDetails){
        //     alert("User Already Exits")
        //     Nav("/")

        // }else{

        //   axios.post("https://loginauthentication-99a77-default-rtdb.firebaseio.com/signupdetail.json",data) 

        //   // axios ushing

        // // fetch("https://loginauthentication-99a77-default-rtdb.firebaseio.com/signupdetail.json",{
        // // method:'POST',
        // // headers: {
        // //     'content-type': 'application/json'
        // //   },
        // //   body:JSON.stringify({name,signupemail,signuppass}),
        // // })  
        
        // // fetch using
        // let data ={name,signupemail,signuppass}



        // // .then(response => response.json())
        // // .then(data => {
        // //   console.log('Success:', data);
        // // })
        // // .catch((error) => {
        // //   console.error('Error:', error);
        // // });
        
        // // optinal
        // }
        // alert('Your Details sucessfully register So please log in ')
        // Nav("/")


        // only firebase authentication


createUserWithEmailAndPassword(auth,signupemail,signuppass).then(user=>{
  console.log(user)
  alert("Your Registation is successfully completed")
  Nav("/")
}).catch(err=>{
  console.log(err)
  alert("Please Provide valid details")
})
  
//firebase with auth card authentication

    }

  return (
    <div>
      <form onSubmit={addDetails} className='login-page'>
        <h2 className='login'>Sign up</h2>
         <div>
      <label className='label' htmlFor="name">name :</label><br/>
      <input className='input' value={name} onChange={(e)=>{setName(e.target.value)}} id="name" type="text" placeholder='Enter Your Name' required/>
      </div>
        <div>
      <label className='label' htmlFor='email'>Email :</label><br/>
      <input className='input' value={signupemail} onChange={(e)=>{setSignupemail(e.target.value)}} id="email" type="email" placeholder='Enter Your Register Mail Id' required3/>
      </div>
      <div>
      <label className='label' htmlFor='pass'>Password :</label><br/>
      <input className='input' value={signuppass} onChange={(e)=>{setSignuppass(e.target.value)}} id='pass' type="password" placeholder='Enter Your Password' required/>
      </div>
      <button className='button' type="submit">Add Details</button>
    </form >
    </div>
  )
}

export default Signup
