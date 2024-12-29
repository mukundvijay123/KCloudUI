import React,{useState} from "react";
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../store/auth-context';
import {signupUrl,domain} from '../../config.js'
import './Login.css'



const SIGNUP_URL=`http://${domain}${signupUrl}`


export function SignUp(){
    const [signupStatus,setSignup]=useState("")
    const { authState, login } = useAuth();

    const createCompany=async (company_name,username,comapny_password)=>{
        try{
            const form=new FormData();
            form.append("company_username",username);
            form.append("company_name",company_name);
            form.append("company_password",comapny_password);
            form.append("action","create");
            const response=await fetch(SIGNUP_URL,{
                method:'POST',
                body:form
            });
            if(!response.ok){
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data=await response.text()
            if(data==='Company operation successful'){
                setSignup("Company created, please login to start using")   
            }else{
                setSignup(`${data}`)
                throw new Error('Invalid credentials');
            }
        }catch(error){
            console.log(error)
        }
    }



    if(authState.isLoggedIn===true){
        return(
            <div>
                <Navbar/>
                <div className="main-content ">
                    <div className="center-box-login">
                    <h3>You are logged in,please log out to create a new company </h3>    
                    </div>
                </div>
                
            </div>
        )
    }else if(authState.isLoggedIn===false){
        return(
            <div>
                <Navbar/>
                <div className="main-content">
                    <div className="center-box-login">
                        <h1>Sign Up</h1>
                        <p>Fill the form below to sign up:</p>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Enter your username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company_name">Company Name</label>
                            <input type="text" id="company_name" placeholder="Enter company name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                        </div>
                        <button className="login-button" onClick={() =>{createCompany(document.getElementById("company_name").value,document.getElementById("username").value,document.getElementById("password").value)}}>
                        Sign Up
                        </button>
                        <p>
                            {signupStatus}
                        </p>

                    </div>
                    
                    
                </div>
            </div>
        )
    }

}
