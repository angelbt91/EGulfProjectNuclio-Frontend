import './botonlogin.css'
import { useState } from 'react';



const LoginButton = () => {

    const [login, setLogin] = useState(false);
    console.log(login);

    return(
        <div className="_loginContainer">
            <button onClick = {() => setLogin(!login)}> <span>{login ? 'LOGED' : 'NO LOGED'}</span></button>
        </div>
        
    );
    
};

export default LoginButton;