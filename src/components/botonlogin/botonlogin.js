import './botonlogin.css'
import { useHistory } from "react-router-dom";



const LoginButton = () => {

    const history = useHistory();

    return(
        <div className="_loginContainer">
            <button onClick = {() => history.push('/login')}> <span>LOGIN</span></button>
        </div>
        
    );
    
};

export default LoginButton;