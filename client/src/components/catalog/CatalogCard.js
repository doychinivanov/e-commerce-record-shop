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

import { ADD_TO_FAVORITES } from '../../graphql/mutations';
import { updateUserFavorites } from '../../redux/user/user-actions';


import { Grid } from "@mui/material";

import styles from './CatalogCard.module.css';

const CatalogCard = ({ theme, record, userId = null, handleOpen, updateUserFavorites, userHasThisRecord }) => {

    const [mutateFavorites, {}] = useMutation(ADD_TO_FAVORITES);

    const addToFavorite = async () => {
        if (!userId) {
            toast.warning('You must be signed in.')
            return handleOpen()
        };

        const idToken = await getUserToken();

        mutateFavorites({ variables: { userId, recordId: record._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                updateUserFavorites(data.addRecordToFavorites.favorites);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

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

                <div onClick={addToFavorite} className={styles.icon}>
                   {userHasThisRecord ? <FavoriteIcon color="error" /> : <FavoriteBorderOutlinedIcon /> }
                </div>

            </div>

        </div>
    </Grid>
);
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserFavorites: (userData) => dispatch(updateUserFavorites(userData))
    }
}

export default connect(null, mapDispatchToProps)(CatalogCard);