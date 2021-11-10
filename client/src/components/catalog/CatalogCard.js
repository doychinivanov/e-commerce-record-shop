import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


import styles from './CatalogCard.module.css';

const CatalogCard = ({ item }) => {

    return (
        <div className={styles.container}>
            <div className={styles.circle}>

            </div>

            <img src={'https://img.discogs.com/Nob0UrVEbV5dWGhdQ03A4I02VJU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6251511-1488732908-9675.jpeg.jpg'} alt="Record cover"/>

            <div className={styles.info}>

                <div className={styles.icon}>
                    <ShoppingCartOutlinedIcon />
                </div>

                <div className={styles.icon}>
                    <SearchOutlinedIcon />
                </div>

                <div className={styles.icon}>
                    <FavoriteBorderOutlinedIcon />
                </div>

            </div>

        </div>
    );
}

export default CatalogCard;