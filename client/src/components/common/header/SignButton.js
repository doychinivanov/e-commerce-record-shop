import { Button } from "@mui/material";

const SignButton = ({ handleOpen, theme, textColor }) => {

    const backgroundColor = theme.palette.mode === 'dark' ? theme.palette.background.divider : '#ed7905ed';

    return (
        <Button sx={{bgcolor: backgroundColor}} onClick={handleOpen} variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
            <span style={{color: '#f5f5f5'}}>
                Sign in
            </span>
        </Button>
    )
}

export default SignButton;