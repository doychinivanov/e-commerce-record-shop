import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { getUserToken } from '../../api/apiUtils';

import { REMOVE_FROM_FAVORITES, ADD_ITEM_TO_CART, ADD_TO_FAVORITES } from '../../graphql/mutations';
import { updateUserFavorites, addToCart } from '../../redux/user/user-actions';


import { Grid } from "@mui/material";

import styles from './CatalogCard.module.css';

const CatalogCard = ({ theme, record, userId = null, handleOpen, updateUserFavorites, userHasThisRecord, addToCartInState }) => {

    const [addToFavs, {}] = useMutation(ADD_TO_FAVORITES);

    const [removeFromFavs, {}] = useMutation(REMOVE_FROM_FAVORITES);

    const [mutateCart, {}] = useMutation(ADD_ITEM_TO_CART);

    const addToFavorite = async () => {
        if (!userId) {
            toast.warning('You must be signed in.')
            return handleOpen()
        };

        const idToken = await getUserToken();

        addToFavs({ variables: { userId, recordId: record._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                updateUserFavorites(data.addRecordToFavorites.favorites);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const removeRecord = async () => {

        const idToken = await getUserToken();

        removeFromFavs({ variables: { userId, recordId: record._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                updateUserFavorites(data.removeRecordFromFavorites.favorites);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const addToCart = async () => {
        const idToken = await getUserToken();

        mutateCart({ variables: { userId, recordId: record._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                addToCartInState(data.addRecordToCart)
            })
            .catch(err => toast.error(err.message));
    }

return (
    <Grid item xs={2} sm={4} md={3}>

        <div className={styles.container} style={{ backgroundColor: theme.palette.background.primary }}>
            <div className={styles.circle}>

            </div>

            <img src={record.imageUrl} alt="Record cover" />

            <div className={styles.info}>

                <div onClick={addToCart} className={styles.icon}>
                    <ShoppingCartOutlinedIcon />
                </div>

                <Link to={`/products/${record._id}`}>
                    <div className={styles.icon}>
                        <SearchOutlinedIcon />
                    </div>
                </Link>

                <div onClick={userHasThisRecord ? removeRecord : addToFavorite} className={styles.icon}>
                   {userHasThisRecord ? <FavoriteIcon color="error" /> : <FavoriteBorderOutlinedIcon /> }
                </div>

            </div>

        </div>
    </Grid>
);
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserFavorites: (userData) => dispatch(updateUserFavorites(userData)),
        addToCartInState: (newItem) => dispatch(addToCart(newItem))
    }
}

export default connect(null, mapDispatchToProps)(CatalogCard);