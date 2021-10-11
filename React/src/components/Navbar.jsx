import React, { Component } from 'react'
import '../components/Navbarstyle.css'
import { Link } from 'react-router-dom';

import {useHistory} from 'react-router-dom';




export default function Navbar ({user}) {


   


        return (
            <div className="navbar" style = {{display:'flex'}}>
                
                <div className= "navbarcontiner">

                        {!user && <ul className="navbaritem" style = {{display:'flex'}}>
                            <li><Link to = "/home" className='nav-links'>Home</Link></li>
                            <li><Link to = "/login"className='nav-links'>Login</Link></li>
                            <li><Link to = "/signup"className='nav-links'>Signup</Link></li>



                        </ul>}



                    
                </div>    
            </div>
        )
    
}
