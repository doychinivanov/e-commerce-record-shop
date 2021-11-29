import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { connect } from "react-redux";

import { REMOVE_FROM_FAVORITES } from '../../graphql/mutations';
import { updateUserFavorites } from '../../redux/user/user-actions';
import { toast } from 'react-toastify';

import styles from './FavoritesCard.module.css';
import { Button } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const FavoritesCard = ({recordData, userId, theme, updateUserFavorites}) => {
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    const [mutateFavorites, {}] = useMutation(REMOVE_FROM_FAVORITES);


    const removeRecord = () => {

        mutateFavorites({ variables: { userId, recordId: recordData._id } })
            .then(({data}) => {
                updateUserFavorites(data.removeRecordFromFavorites.favorites);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div className={styles['card-container']} style={{backgroundColor: theme.palette.background.secondary}}>
            <img className={styles['record-img']} src={recordData.imageUrl} alt="record cover" />

            <div className={styles['card-data']}>
                <h1 className={styles['record-name']}>{recordData.name}</h1>
                <h4 className={styles['record-creator']}>{recordData.creatorArtist}</h4>
                <h3>Price: {recordData.price}$</h3>

                <span className={styles['button-holder']}>
                    <Button variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
                        <span style={{ color: buttonColor, display: 'flex' }}>
                            <ShoppingCartOutlinedIcon />
                            <span style={{ color: buttonColor }} className={styles['btn-content']}>Add to Cart</span>
                        </span>
                    </Button>
                </span>

                <span className={styles['button-holder']}>
                    <Link to={`/products/${recordData._id}`}>
                    <Button variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
                        <span style={{ color: buttonColor, display: 'flex' }}>
                            <SearchOutlinedIcon />
                            <span style={{ color: buttonColor }} className={styles['btn-content']}>See more</span>
                        </span>
                    </Button>
                    </Link>
                </span>

                <span onClick={removeRecord} className={styles['button-holder']}>
                    <Button variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
                        <span style={{ color: buttonColor, display: 'flex' }}>
                            <SearchOutlinedIcon />
                            <span style={{ color: buttonColor }} className={styles['btn-content']}>Remove</span>
                        </span>
                    </Button>
                </span>
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        updateUserFavorites: (userData) => dispatch(updateUserFavorites(userData))
    }
}

export default connect(null, mapDispatchToProps)(FavoritesCard);