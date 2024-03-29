import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/client';

import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { getUserToken } from '../../api/apiUtils';
import { adjustQty, removeFromCart } from '../../redux/user/user-actions';
import { UPDATE_CART_ITEM_QUANTITY, DELTE_CART_ITEM } from '../../graphql/mutations';

import styles from './CartItem.module.css';
import { toast } from 'react-toastify';

const CartItem = ({ item, theme, userId, adjustQty, removeItemFromCart }) => {
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    const [currentQty, setCurrentQty] = useState(item.quantity);

    const [mutateQunatity, {}] = useMutation(UPDATE_CART_ITEM_QUANTITY);

    const [deleteCartItem, {}] = useMutation(DELTE_CART_ITEM);

    const updateQtyInDB = async () => {
        const idToken = await getUserToken();

        mutateQunatity({ variables: { userId, cartItem: item._id, quantity: currentQty }, context: { headers: { 'x-authorization': idToken } } })
        .then(() => {
            console.log('updated')
        })
        .catch(err => toast.error('Failed to update quantity'));
    }

    const deleteItemFromCart = async () => {
        const idToken = await getUserToken();

        deleteCartItem({ variables: { cartItem: item._id, }, context: { headers: { 'x-authorization': idToken } } })
        .then(({data}) => {
            removeItemFromCart(data.deleteItemFromCart._id);
        })
        .catch(err => toast.error('Failed to update quantity'));

    }

    return (
        <div className={styles['cart-item-holder']}>
            <div className={styles['cart-item-info']}>
                <Link className={styles['cart-item-photo-link']} to={`/products/${item.record._id}`}>
                    <img className={styles['cart-item-photo']} src={item.record.imageUrl} alt="item in cart" />
                </Link>
            </div>

            <div className={styles['cart-item-record-info']}>
                <h2 className={styles['cart-item-record-name']}>
                    {item.record.name}
                </h2>

                <h4>
                    {item.record.creatorArtist}
                </h4>
            </div>


            <div className={styles['cart-item-details']}>
                <span>
                    <span className={styles['quantity-content']}>
                        Quantity: 
                    </span>

                    <input
                    onChange={(ev) => {
                        const currentVal = Number(ev.target.value);
                        if(currentVal <= 0 || currentVal % 1 !== 0 || currentVal > 15) return toast.info('Quantity can be an integer between 1 and 15');

                        setCurrentQty(currentVal);
                        adjustQty(item._id, currentVal);
                    }}
                    onBlur={updateQtyInDB}
                    className={styles['quantity-input']}
                    value={currentQty}
                    min="1"
                    type="number" />
                </span>
            </div>

            <span className={styles['price-info']}>
                <span className={styles['price-content']}>Price: </span>
                {item.record.price}€
            </span>

            <span onClick={deleteItemFromCart} className={styles['button-holder']}>
                <Button variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
                    <span style={{ color: buttonColor, display: 'flex' }}>
                        <DeleteIcon />
                        <span style={{ color: buttonColor }} className={styles['btn-content']}>Remove</span>
                    </span>
                </Button>
            </span>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        adjustQty: (itemId, newQty) => dispatch(adjustQty(itemId, newQty)),
        removeItemFromCart: (itemId) => dispatch(removeFromCart(itemId))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);