import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';


import { Grid } from "@mui/material";

import styles from './CatalogCard.module.css';

const CatalogCard = ({ theme, record }) => {

    return (
        <Grid item xs={2} sm={4} md={3}>

            <div className={styles.container} style={{ backgroundColor: theme.palette.background.primary }}>
                <div className={styles.circle}>

                </div>

                <img src={record.imageUrl} alt="Record cover" />

                <div className={styles.info}>

                    <div className={styles.icon}>
                        <ShoppingCartOutlinedIcon />
                    </div>

                    <Link to={`/products/${record._id}`}>
                        <div className={styles.icon}>
                            <SearchOutlinedIcon />
                        </div>
                    </Link>

                    <div className={styles.icon}>
                        <FavoriteBorderOutlinedIcon />
                    </div>

                </div>

            </div>
        </Grid>
    );
}

export default CatalogCard;