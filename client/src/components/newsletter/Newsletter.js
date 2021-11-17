import { Container, TextField, Typography, Box, Button, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Newsletter = ({theme}) => {

    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

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
                                <TextField fullWidth margin="normal" label="Enter Your Email" variant="standard" />
                            </Grid>

                            <Grid item xs={2}>
                                <Button variant="outlined">
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