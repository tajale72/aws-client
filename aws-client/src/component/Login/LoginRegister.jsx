import './LoginRegister.css';
import { FormControl, Input,InputLabel} from '@mui/material';


function LoginRegister() {
    return (
        <div className="formcontrol">
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
             <Input id="my-input" aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
             <Input id="my-input" aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
            </div>

        </div>
    )
}

export default LoginRegister