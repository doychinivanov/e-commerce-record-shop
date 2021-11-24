import { FormControl, InputLabel, Input } from '@mui/material';

const LoginForm = ({ children, textColor, classes }) => {

    return (
        <>
            <FormControl>
                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent} >
                        <InputLabel htmlFor="email-input">Email</InputLabel>
                        <Input id="email-input" />
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent} >
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