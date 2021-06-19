import './botonlogin.css'
import { useHistory } from "react-router-dom";
import { useState } from 'react';



const LoginButton = () => {

    const history = useHistory();

    return(
        <div className="_loginbuttonContainer">
            {localStorage.getItem("token")=="" && <button onClick = {() => history.push('/login')}> <span>LOGIN</span></button>}
            {localStorage.getItem("token")!="" && <button onClick = {() => localStorage.setItem("token","")}> <span>LOGOUT</span></button>}
        </div>
        
    );
    
};

export default LoginButton;