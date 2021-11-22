import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';


const LoginForm = ({children}) => {
    return (
        <>
            <FormControl>
                <span style={{ marginTop: 25 }}>
                    <FormControl>
                        <InputLabel htmlFor="email-input">Email</InputLabel>
                        <Input id="email-input" />
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <Input id="password-input" type="password" />
                    </FormControl>
                </span>

                {children}
            </FormControl>

        </>
    )
}

export default LoginForm;