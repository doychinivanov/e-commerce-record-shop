import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';


const RegisterForm = ({children, classes}) => {

    return (
        <>
            <FormControl>
                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent}>
                        <InputLabel htmlFor="email-input">Email</InputLabel>
                        <Input id="email-input" aria-describedby="email-safety" />
                        <FormHelperText id="email-safety">We'll never share your email.</FormHelperText>
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent}>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <Input id="password-input" type="password" />
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent}>
                        <InputLabel htmlFor="rePass-input">Repeat Password</InputLabel>
                        <Input id="rePass-input" type="password" />
                    </FormControl>
                </span>

                {children}
            </FormControl>

        </>
    )
}

export default RegisterForm;