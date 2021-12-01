import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { connect } from "react-redux";
import { toast } from 'react-toastify';

import { REMOVE_FROM_FAVORITES, ADD_ITEM_TO_CART } from '../../graphql/mutations';
import { updateUserFavorites, addToCart } from '../../redux/user/user-actions';
import { getUserToken } from '../../api/apiUtils';

import styles from './FavoritesCard.module.css';
import { Button } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const FavoritesCard = ({recordData, userId, theme, updateUserFavorites, addToCartInState}) => {
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    const [mutateFavorites, {}] = useMutation(REMOVE_FROM_FAVORITES);
    const [mutateCart, {}] = useMutation(ADD_ITEM_TO_CART);


    const removeRecord = async () => {

        const idToken = await getUserToken();

        mutateFavorites({ variables: { userId, recordId: recordData._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                updateUserFavorites(data.removeRecordFromFavorites.favorites);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const addToCart = async () => {
        const idToken = await getUserToken();

        mutateCart({ variables: { userId, recordId: recordData._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                addToCartInState(data.addRecordToCart);
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div className={styles['card-container']} style={{backgroundColor: theme.palette.background.secondary}}>
            <img className={styles['record-img']} src={recordData.imageUrl} alt="record cover" />

            <div className={styles['card-data']}>
                <h1 className={styles['record-name']}>{recordData.name}</h1>
                <h4 className={styles['record-creator']}>{recordData.creatorArtist}</h4>
                <h3>Price: {recordData.price}$</h3>

                <span onClick={addToCart} className={styles['button-holder']}>
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
        updateUserFavorites: (userData) => dispatch(updateUserFavorites(userData)),
        addToCartInState: (newItem) => dispatch(addToCart(newItem))
    }
}

export default connect(null, mapDispatchToProps)(FavoritesCard);