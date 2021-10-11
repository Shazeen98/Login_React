
import "../components/Loginstyle.css"
import Navbar from './Navbar';
import React, {useState } from 'react'
import { useHistory } from 'react-router';
import { Signin } from "./Signin";
import {Link} from "react-router-dom";



export default function Login(){
    const[userEmail,setUserEmail]  = useState("");
    const[userPassword,setUserPassword]  = useState("");
    const[emailRe,setEmailRe]=useState(false);
    const[passwordRe,setPasswordRe]  = useState(false);
    const[userMessage , setUserMessage] = useState("");
    const history = useHistory();

    

    function onSubmitHandler () {
        if(userEmail === undefined || userEmail === ''){
            setEmailRe(true);
            setUserMessage("Email is required !")
        }else{setEmailRe(false) }

        if(userPassword === undefined || userPassword === ''){
            setPasswordRe(true);
            setUserMessage("Password is required !")
        }else{setPasswordRe(false) }


    }

     
        return (
            <div className= "login">
                   <Navbar/>
                <div className="headline">
                    WELCOME BACK !
                </div>
               
                <div className="box1">
                    
                    <h1>Login</h1>
                    <small>{userMessage}</small>
                    <div className="form">
                        <input type="email" onChange={(e) => {setUserEmail(e.target.value)}} placeholder= "UserEmail" className={!emailRe ? "email" :  "dangerEmail"}  /><br></br>
                        <input type="password" onChange={(e) => {setUserPassword(e.target.value)}}placeholder= "Password" className={!passwordRe ? "password" :  "dangerpassword"}/><br></br>
                        <button className="btnrem" onClick= {() =>onSubmitHandler()} >Remember ME</button>
                        <button className="btnreset"><Link  to ='/ReSetPage' className= "vibtn">Forget Password</Link></button>
                        <button className="btnlog" onClick= {() =>onSubmitHandler()} >Log In</button>
                    </div>
                </div>
            </div>
        )

}
