import { useQuery } from "@apollo/client";
import { GET_PRODUCT_INFO_FOR_DETAILS } from '../../graphql/queries';

import { Grid, Container, Skeleton, Box, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from './ProductDetails.module.css';


const ProductDetails = ({ id, theme }) => {
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    const { loading, error, data } = useQuery(GET_PRODUCT_INFO_FOR_DETAILS, { variables: { recordId: id } });

    if (loading) {
        return null;
    }

    if (error) {
        alert(error.message);
    }

    return (
        <div style={{ 'padding-top': 90, 'padding-bottom': 90, backgroundColor: theme.palette.background.primary, color: textColor }}>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 8 }} alignItems="center">
                        <Grid item xs={4} sm={4} md={4}>
                            <img className={styles['record-img']} src={data.record.imageUrl} alt="record cover" />
                        </Grid>

                        <Grid item xs={4} sm={4} md={4}>
                            <div>
                                <h1 className={styles['record-name']}>{data.record.name}</h1>
                                <h3 className={styles['author']}>{data.record.creatorArtist}</h3>
                            </div>

                            <p className={styles['record-description']}>{data.record.description}</p>

                            <span>
                                <h3>Price: {data.record.price}$</h3>
                                <Button variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
                                    <span style={{ color: buttonColor, display: 'flex'}}>
                                        <ShoppingCartOutlinedIcon />
                                        <span style={{ color: buttonColor }} className={styles['btn-content']}>Add to Cart</span>
                                    </span>
                                </Button>
                            </span>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default ProductDetails;