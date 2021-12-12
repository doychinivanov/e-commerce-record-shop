import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { getUserToken } from '../../api/apiUtils';

import { REMOVE_FROM_FAVORITES, ADD_ITEM_TO_CART, ADD_TO_FAVORITES } from '../../graphql/mutations';
import { updateUserFavorites, addToCart } from '../../redux/user/user-actions';
import { turnModalOn } from '../../redux/authModal/modal-actions';

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "./CatalogCard.module.css";

const CustomerOptions = ({ productId, userId, userHasThisRecord, turnModalOn, updateUserFavorites, addToCartInState }) => {

    const [addToFavs, { }] = useMutation(ADD_TO_FAVORITES);

    const [removeFromFavs, { }] = useMutation(REMOVE_FROM_FAVORITES);

    const [mutateCart, { }] = useMutation(ADD_ITEM_TO_CART);

    const addToFavorite = async () => {
        if (!userId) {
            toast.warning('You must be signed in.')
            return turnModalOn()
        };

        const idToken = await getUserToken();

        addToFavs({ variables: { userId, recordId: productId }, context: { headers: { 'x-authorization': idToken } } })
            .then(({ data }) => {
                updateUserFavorites(data.addRecordToFavorites.favorites);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const removeRecord = async () => {

        const idToken = await getUserToken();

        removeFromFavs({ variables: { userId, recordId: productId }, context: { headers: { 'x-authorization': idToken } } })
            .then(({ data }) => {
                updateUserFavorites(data.removeRecordFromFavorites.favorites);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const addToCart = async () => {
        if (!userId) {
            toast.warning('You must be signed in.')
            return turnModalOn()
        };

        const idToken = await getUserToken();

        mutateCart({ variables: { userId, recordId: productId }, context: { headers: { 'x-authorization': idToken } } })
            .then(({ data }) => {
                addToCartInState(data.addRecordToCart);
            })
            .catch(err => toast.error(err.message));
    }

  return (
    <div className={styles.info}>
      <div onClick={addToCart} className={styles.icon}>
        <ShoppingCartOutlinedIcon />
      </div>

      <Link to={`/products/${productId}`}>
        <div className={styles.icon}>
          <SearchOutlinedIcon />
        </div>
      </Link>

      <div
          onClick={userHasThisRecord ? removeRecord : addToFavorite}
          className={styles.icon}
        >
          {userHasThisRecord ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
    return {
        updateUserFavorites: (userData) => dispatch(updateUserFavorites(userData)),
        addToCartInState: (newItem) => dispatch(addToCart(newItem)),
        turnModalOn: () => dispatch(turnModalOn())
    }
}

export default connect(null, mapDispatchToProps)(CustomerOptions);
