import { Link } from 'react-router-dom';
import { Container, Box, Grid } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import styles from './Footer.module.css';


const Footer = ({ theme }) => {
    const backgroundColor = theme.palette.mode === 'dark' ? theme.palette.background.primary : theme.palette.text.secondary;
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    return (
        <div style={{ backgroundColor: backgroundColor, color: textColor }}>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={{ xs: 4, sm: 12 }}>
                        <Grid item xs={4} sm={4}>
                            <h1>Vinyled.</h1>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don’t look even slightly believable.
                            </p>
                            <Box>
                                <Link className={styles['social-icon']} to="/"><FacebookIcon fontSize="large" /></Link>
                                <Link className={styles['social-icon']} to="/"><InstagramIcon fontSize="large" /></Link>
                                <Link className={styles['social-icon']} to="/"><TwitterIcon fontSize="large" /></Link>
                                <Link className={styles['social-icon']} to="/"><RedditIcon fontSize="large" /></Link>
                            </Box>
                        </Grid>

                        <Grid item xs={4} sm={4}>
                            <h3>Useful Links</h3>

                            <Grid container spacing={2} columns={{ xs: 8, sm: 8 }}>
                                <Grid item xs={4} sm={4}>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">Offers</Link></li>
                                        <li><Link to="/">Vinyles</Link></li>
                                        <li><Link to="/">Accessories</Link></li>
                                        <li><Link to="/">Players</Link></li>
                                    </ul>
                                </Grid>

                                <Grid item xs={4} sm={4}>
                                    <ul>
                                        <li><Link to="/">Cart</Link></li>
                                        <li><Link to="/">Favorites</Link></li>
                                        <li><Link to="/">My Profile</Link></li>
                                        <li><Link to="/">My Orders</Link></li>
                                        <li><Link to="/">Support</Link></li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={4} sm={4}>
                            <h3>Contacts</h3>

                            <div className={styles['contact-info']}>
                                <LocationOnIcon />
                                <span>Bulgaria, Sofia, bul. G. Dimitrov 503</span>
                            </div>

                            <div className={styles['contact-info']}>
                                <LocalPhoneIcon />
                                +2 987 123
                            </div>

                            <div className={styles['contact-info']}>
                                <EmailIcon />
                                <span className={styles.email}>doychinivn@gmail.com</span>
                            </div>

                            <img className={styles['payment-methods']} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment methods" />
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div>
    );
}

export default Footer;