import React, { createContext, useState, useContext, useEffect } from 'react';


// Create context with an object that holds multiple fields
const AuthContext = createContext();


// API Base URL (change to your backend URL)
const API_URL = 'http://your-api-url.com';

function AuthProvider({ children }) {
    
    const [authState, setAuthState] = useState({
      isLoggedIn: false,
      company_username: null,
    });

    useEffect(()=>{
        const isLoggedIn=localStorage.getItem('isLoggedIn')
        const companyUsername=localStorage.getItem('company_username')

        if (isLoggedIn==='true' & companyUsername!=null){
            setAuthState({isLoggedIn:true,company_username:companyUsername})
        }

    },[])

    const login =async (companyUsername,company_password)=>{
        try{
            const formData=new FormData();
            FormData.append('company_username',companyUsername);
            FormData.append('company_password',company_password);
            const response= await fetch(`${API_URL}/api/v1/user/login`,{
                method:'POST',
                body: formData,
            });

            // Check if the response is not OK (status code outside of 2xx)
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.text();
            if(data==='Login successful'){
                setAuthState({isAuthenticated:true,company_username:companyUsername})
                localStorage.setItem('isLoggedIn','true')
                localStorage.setItem('company_username',companyUsername)
            }else{
                localStorage.setItem('isLoggedIn','false')
                localStorage.removeItem('company_username')
                throw new Error('Invalid credentials');
            }
        }catch(error){
            console.log(error)
        }

        
    }

    const logout=()=>{
        localStorage.removeItem('company_username')
        setAuthState({isLoggedIn:false,company_username:null})
    }


    return(
        <AuthContext.Provider value={{authState,login,logout}}>
            {children}
        </AuthContext.Provider> 
    )

}    


export default  AuthProvider