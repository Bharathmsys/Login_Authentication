import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './Firebase'
const Login = ({email,setEmail}) => {
    // const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    // const [details,setDetails] = useState([])

    const Nav = useNavigate()
    // useEffect(()=>{
    //     fetch("https://loginauthentication-99a77-default-rtdb.firebaseio.com/signupdetail.json",{method:'GET'})
    //     .then(res=>res.json())
    //     .then(data=>{
    //         let output = []
    //         for(let key in data ){
    //             output.push(data[key])
    //         }
    //         setDetails(output)
    //     })
    // })

    // firebase data get 


    const onsubmit = (e)=>{
        e.preventDefault();
        // const findDetails = details.find((value)=>{
        //     return value.signupemail===email &&value.signuppass===password
        // })
        // if(findDetails){
        //     alert("your log in sucessfully completed")
        //     Nav('/Home')
        // }
        // else{
        //     alert('log in is not resgister please do sing up')
        //     Nav('/singup')
        // }



        // only fire base authentication

        signInWithEmailAndPassword(auth,email,password).then(user=>{
          // console.log(user)
           Nav("/Home")
        }).catch(err=>{
          // console.log(err)
          alert("your email is not register so please register the details")
          // Nav('/singup')
        })
       
// firebase with authcard authentication
    }
  return (
    <div>
        
      <form onSubmit={onsubmit} className='login-page'>
      <h2 className='login'>Login</h2>
        <div>
      <label className='label' htmlFor='email'>Email :</label><br/>
      <input className='input' onChange={(event)=>{setEmail(event.target.value)}} id="email" type="email" placeholder='Enter Your Register Mail Id' required/>
      </div>
      <div>
      <label className='label' htmlFor='pass'>Password :</label><br/>
      <input className='input' onChange={(event)=>{setPassword(event.target.value)}} id='pass' type="password" placeholder='Enter Your Password' required/>
      </div>
      <button className='button' type='submit'>Log in</button>
      <h5>You Don't have account <Link to="singup"><span>sing up</span></Link></h5>
    </form>
    </div>
  )
}

export default Login
