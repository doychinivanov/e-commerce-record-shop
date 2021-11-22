import { useState } from "react";
import { Typography, Box, Modal } from "@mui/material";

import Form from '../forms/Form';
import styles from './AuthModal.module.css';

const AuthModal = ({ open, handleClose, theme }) => {
    const [formType, setFormType] = useState('login');

    const backgroundColor = theme.palette.mode === 'dark' ? theme.palette.background.primary : theme.palette.text.secondary;
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: backgroundColor,
        color: textColor,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };

    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={style} >
                    <div id="modal-modal-title" className={styles['form-navigation']}>
                        <Typography onClick={() => setFormType('login')} className={styles['sign-in']} component="h6">
                            Sign in
                        </Typography>

                        <Typography onClick={() => setFormType('register')} className={styles['sign-up']} component="h6">
                            Sign up
                        </Typography>
                    </div>

                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <Form type={formType} />
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default AuthModal;