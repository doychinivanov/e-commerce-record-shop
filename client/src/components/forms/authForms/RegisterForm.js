import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { toast } from 'react-toastify';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';

import { useAuth } from '../../../contexts/AuthCtx';
import { CREATE_REGULAR_USER } from '../../../graphql/mutations';
import { validateEmail, validateName, validatePassword } from '../../../utils/inputValidation';


const RegisterForm = ({ closeModal, classes }) => {
    const { signUpToFirebase } = useAuth();

    const [email, setEmail] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [rePass, setRePass] = useState(undefined);

    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongName, setWrongName] = useState(false);
    const [wrongPassowrd, setWrongPassowrd] = useState(false);
    const [wrongRePass, setWrongRePass] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [mutateFunction, { error }] = useMutation(CREATE_REGULAR_USER);

    if (error) {
        toast.error(error.message);
    }

    const resetErrors = () => {
        setWrongEmail(false);
        setWrongName(false);
        setWrongPassowrd(false);
        setWrongRePass(false);
    }

    const allFieldsAreValid = () => {

        if (!email || !validateEmail(email)) {
            setWrongEmail(true);
            toast.error('Please, enter a valid email');

            return false;
        }

        if (!name || !validateName(name)) {
            setWrongName(true);
            toast.error('A name cannot be less than 3 symbols. Only English letters are allowed.')

            return false;
        }

        if (!password || !validatePassword(password)) {
            setWrongPassowrd(true);
            setWrongRePass(true);
            toast.error('Password must be at least 8 characters.');
            toast.error('Containing at least one number and one special char.');

            return false;
        }

        if (!password || password !== rePass) {
            setWrongPassowrd(true);
            setWrongRePass(true);
            toast.error('Passwords don\'t match.');

            return false;
        }

        return true;
    }

    const submitRegisterForm = () => {

        resetErrors();

        if (!allFieldsAreValid()) return;

        setIsLoading(true);
        const loadingToastID = toast.loading("Please wait...");

        signUpToFirebase(email, password)
            .then(() => {
                mutateFunction({ variables: { email, fullName: name } })
                    .then(({ data }) => {
                        // Add this data to userState
                        console.log(data);
                    }).then(() => {
                        setIsLoading(false);
                        toast.update(loadingToastID, { render: "Welcome to Vinyled.", type: "success", isLoading: false, autoClose: 5000 });
                        closeModal();
                    });
            }).catch((err) => {
                setIsLoading(false);
                toast.update(loadingToastID, { render: err.message, type: "error", isLoading: false, autoClose: 5000 });
            });
    }

    return (
        <>
            <FormControl>
                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent}>
                        <InputLabel error={wrongEmail} htmlFor="email-input">Email</InputLabel>
                        <Input
                            onChange={(ev) => setEmail(ev.target.value)}
                            error={wrongEmail}
                            disabled={isLoading}
                            id="email-input"
                            aria-describedby="email-safety" />
                        <FormHelperText id="email-safety">We'll never share your email.</FormHelperText>
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent}>
                        <InputLabel error={wrongName} htmlFor="name-input">Name</InputLabel>
                        <Input
                            error={wrongName}
                            onChange={(ev) => setName(ev.target.value)}
                            disabled={isLoading}
                            id="name-input" />
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent}>
                        <InputLabel error={wrongPassowrd} htmlFor="password-input">Password</InputLabel>
                        <Input
                            error={wrongPassowrd}
                            onChange={(ev) => setPassword(ev.target.value)}
                            id="password-input"
                            disabled={isLoading}
                            type="password" />
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent}>
                        <InputLabel error={wrongRePass} htmlFor="rePass-input">Repeat Password</InputLabel>
                        <Input
                            error={wrongRePass}
                            onChange={(ev) => setRePass(ev.target.value)}
                            id="rePass-input"
                            disabled={isLoading}
                            type="password" />
                    </FormControl>
                </span>

                <Button disabled={isLoading} onClick={submitRegisterForm} sx={{ mt: 5 }}>
                    <span style={{ color: '#f5f5f5' }}>
                        Sign Up
                    </span>
                </Button>
            </FormControl>

        </>
    )
}

export default RegisterForm;