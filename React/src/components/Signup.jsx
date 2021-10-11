import React, {useState } from 'react'
import { useHistory } from 'react-router';
import "../components/Signupstyle.css"



export default function Signup () {

        const[userName,setUserName]  = useState("");
        const[userEmail,setUserEmail]  = useState("");
        const[userPassword,setUserPassword]  = useState("");
        const[userCnPassword,setUserCnPassword]  = useState("");

        const[nameRe,setNameRe]  = useState(false);
        const[emailRe,setEmailRe]=useState(false);
        const[passwordRe,setPasswordRe]  = useState(false);
        const[cnPasswordRe,setCnPasswordRe]  = useState(false);
        const[userMessage , setUserMessage] = useState("");
        const history = useHistory();


    function clickHandler() {
        return undefined;
    }

    return (

            
            <div className = "signup" >

                <div className="head-sign">
                        Welcome to VT Fashions
                </div>
                <div className="box3">
                <h1>SIGN UP</h1><br></br>
                <small>{userMessage}</small>

                    <div className="sign-form">
                        <input type="text" onChange = {(e) => {setUserName(e.target.value)}} placeholder= "First Name" className={!nameRe ? "name" :  "dangerName"} />
                        <input type="lastname" onChange = {(e) => {setUserEmail(e.target.value)}} placeholder= "lastname" className={!emailRe ? "lastname" :  "dangerlastname"}  />
                        <input type="email" onChange = {(e) => {setUserEmail(e.target.value)}} placeholder= "UserEmail" className={!emailRe ? "email" :  "dangerEmail"}  />
                        <input type="password" onChange = {(e) => {setUserPassword(e.target.value)}} placeholder= "Password" className={!passwordRe ? "password" :  "dangerpassword"}/>
                        <input type="password" onChange = {(e) => {setUserCnPassword(e.target.value)}} placeholder= " Confirm Password" className={!cnPasswordRe ? "cnpassword" :  "dangerCnPassword"} />
                        <button onClick={() => clickHandler()}  className="btnlog">Sign up</button> 
                    </div>
                </div>
                
            </div>
        )
    
}
