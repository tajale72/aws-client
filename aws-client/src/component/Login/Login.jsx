import Navbar from '../Navbar/Navbar'
import './Login.css';
import LoginRegister from './LoginRegister';


function Login() {
    return (
       
        <div className="login">
        <Navbar /> 
        <div className="login-title"><h1>Login</h1></div>
        <div className="login-registration">
        <LoginRegister />
        </div> 
       
        </div>
    )
}

export default Login