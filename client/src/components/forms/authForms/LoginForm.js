import { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useApolloClient } from '@apollo/client';
import { FormControl, InputLabel, Input, Button } from '@mui/material';

import { useAuth } from '../../../contexts/AuthCtx';
import { validateEmail, validatePassword } from '../../../utils/inputValidation';
import { getUserToken } from '../../../api/apiUtils';
import { GET_USER_BY_EMAIL } from '../../../graphql/queries';
import { addUserToState } from '../../../redux/user/user-actions';

const LoginForm = ({ closeModal, classes, addUserToState }) => {

    const client = useApolloClient();

    const { login } = useAuth();

    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPassowrd, setWrongPassowrd] = useState(false);

    const [isLoading, setIsLoading] = useState(false);


    const resetErrors = () => {
        setWrongEmail(false);
        setWrongPassowrd(false);
    }

    const allFieldsAreValid = () => {

        if (!email || !validateEmail(email)) {
            setWrongEmail(true);
            toast.error('Please, enter a valid email');

            return false;
        }

        if (!password || !validatePassword(password)) {
            setWrongPassowrd(true);
            toast.error('Password must be at least 8 characters.');
            toast.error('Containing at least one number and one special char.');

            return false;
        }

        return true;
    }

    const submitLoginForm = () => {
        resetErrors();

        if (!allFieldsAreValid()) return;

        setIsLoading(true);
        const loadingToastID = toast.loading("Please wait...");

        login(email, password)
            .then(async () => {
                const idToken = await getUserToken();

                const {data} = await client.query({
                    query: GET_USER_BY_EMAIL,
                    variables: { email },
                    context: { headers: { 'x-authorization': idToken } }
                });

                addUserToState(data.user)
            }).catch((err) => {
                setIsLoading(false);
                toast.update(loadingToastID, { render: err.message, type: "error", isLoading: false, autoClose: 5000 });
            }).finally(() => {
                setIsLoading(false);
                closeModal();
                toast.update(loadingToastID, { render: "Welcome to Vinyled.", type: "success", isLoading: false, autoClose: 5000 });
            })
    }

    return (
        <>
            <FormControl>
                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent} >
                        <InputLabel error={wrongEmail} htmlFor="email-input">Email</InputLabel>
                        <Input
                            onChange={(ev) => setEmail(ev.target.value)}
                            error={wrongEmail} id="email-input"
                            disabled={isLoading}
                        />
                    </FormControl>
                </span>

                <span style={{ marginTop: 25 }}>
                    <FormControl className={classes.myComponent} >
                        <InputLabel error={wrongPassowrd} htmlFor="password-input">Password</InputLabel>
                        <Input
                            onChange={(ev) => setPassword(ev.target.value)}
                            error={wrongPassowrd}
                            id="password-input"
                            type="password"
                            disabled={isLoading}
                        />
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

const mapDispatchToProps = dispatch => {
    return {
        addUserToState: (userData) => dispatch(addUserToState(userData))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);