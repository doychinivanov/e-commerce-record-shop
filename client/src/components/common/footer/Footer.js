import { Container, Typography, Box, Button, Grid } from "@mui/material";


const Footer = ({theme}) => {
    const backgroundColor = theme.palette.mode === 'dark' ? theme.palette.background.primary : theme.palette.text.secondary;
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    return (
        <div style={{backgroundColor: backgroundColor, color: textColor}}>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <h1>Hello</h1>
                            <h1>Hello</h1>
                            <h1>Hello</h1>
                            <h1>Hello</h1>
                        </Grid>

                        <Grid item xs={4}>
                        <h1>Hello</h1>
                            <h1>Hello</h1>
                            <h1>Hello</h1>
                            <h1>Hello</h1>
                        </Grid>

                        <Grid item xs={4}>
                        <h1>Hello</h1>
                            <h1>Hello</h1>
                            <h1>Hello</h1>
                            <h1>Hello</h1>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div>
    );
}

export default Footer;