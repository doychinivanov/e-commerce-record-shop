import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Container, TextField, Typography, Box, Button, Grid } from "@mui/material";
import { toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';

import { validateEmail } from '../../utils/inputValidation';
import { ADD_EMAIL_FOR_NEWSLETTER } from '../../graphql/mutations';

const Newsletter = ({ theme }) => {

    const [isDisabled, setIsDisabled] = useState(false);
    const [emailIsWrong, setEmailIsWrong] = useState(false);
    const [email, setEmail] = useState('');
    
    const [mutateFunction, { error }] = useMutation(ADD_EMAIL_FOR_NEWSLETTER);

    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    if (error) {
        toast.error(error.message);
    }

    const submitEmail = () => {
        if (email.trim() === '' || !validateEmail(email)) {
            setEmailIsWrong(true);
            return toast.error('Please enter a valid email!')
        }

        setIsDisabled(true);
        mutateFunction({ variables: { email } })
        .then(response => {
            toast.success('Thank you! We recieved your email.');
        })
        .finally(() => {
            setEmail('');
            setIsDisabled(false)
        });
    }

    return (
        <div style={{ backgroundColor: theme.palette.background.secondary, color: textColor, paddingTop: 10, borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="h2"
                        noWrap
                        fontFamily="Ubuntu sans-serif"
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' }, fontWeight: 'bold', textAlign: "center", mt: 5 }}
                    >
                        Newsletter
                    </Typography>

                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        fontFamily="Ubuntu sans-serif"
                        sx={{ display: { xs: 'block', sm: 'block' }, mt: 4, textAlign: "center" }}
                    >
                        Get timely updates for your favorite products
                    </Typography>

                    <Box pb={10}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={8}>
                                <TextField error={emailIsWrong} disabled={isDisabled} value={email} onChange={(ev) => setEmail(ev.target.value)} fullWidth margin="normal" label="Enter Your Email" variant="standard" />
                            </Grid>

                            <Grid item xs={2}>
                                <Button color={emailIsWrong ? "error": "inherit"} disabled={isDisabled} onClick={submitEmail} variant="outlined">
                                    <SendIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    )

}

export default Newsletter;