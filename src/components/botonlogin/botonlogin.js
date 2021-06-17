import './botonlogin.css'
import { useState } from 'react';



const LoginButton = () => {

    const [login, setLogin] = useState(true);
    console.log(login);
    
    

    return(
        <div className="button">
            <p>{login ? 'Estado: Loged' : 'Estado: No loged'}</p>
            <button onClick = {() => setLogin(!login)}> {login ? 'Loged' : 'No loged'}</button>
        </div>
        
    );
    
};
export default LoginButton;