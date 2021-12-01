import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './CartItem.module.css';

const CartItem = ({ item, theme }) => {
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

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
                    Quantity: 
                    <input className={styles['quantity-input']} value={item.quantity} type="number" />
                </span>


                <span>Price: {item.record.price}</span>
            </div>

            <span className={styles['button-holder']}>
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

export default CartItem;