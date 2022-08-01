import Navbar from '../Navbar/Navbar'
import './Signup.css';
import Register from '../Register/Register'

function Signup() {
    return (
        <div className="signup">
        <Navbar /> 
        <div className="register-title"><h1>Register</h1></div>
        <div className="registration">
        <Register />
        </div> 
       
        </div>
    )
}

export default Signup