import { FormControl, InputLabel, Input, Button } from '@mui/material';

const LoginForm = ({ closeModal, classes }) => {

    const submitLoginForm = () =>{
        console.log('hey');
        closeModal();
    }

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

                <Button onClick={submitLoginForm} sx={{ mt: 5 }}>
                    <span style={{ color: '#f5f5f5' }}>
                        Sign Up
                    </span>
                </Button>
            </FormControl>

        </>
    )
}

export default LoginForm;