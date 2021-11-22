import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid, Button } from "@mui/material";

import styles from './ProductDetailsContent.module.css';

const ProductDetailsContent = ({theme, data }) => {
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;
    
    return (
        <>
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
                        <span style={{ color: buttonColor, display: 'flex' }}>
                            <ShoppingCartOutlinedIcon />
                            <span style={{ color: buttonColor }} className={styles['btn-content']}>Add to Cart</span>
                        </span>
                    </Button>
                </span>
            </Grid>
        </>
    )
}

export default ProductDetailsContent;