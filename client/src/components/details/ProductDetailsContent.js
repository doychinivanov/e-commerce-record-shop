import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';

import { addToCart } from '../../redux/user/user-actions';
import { ADD_ITEM_TO_CART } from '../../graphql/mutations';
import { getUserToken } from '../../api/apiUtils';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid, Button } from "@mui/material";

import styles from './ProductDetailsContent.module.css';

const ProductDetailsContent = ({theme, data, addToCartInState, user }) => {
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    const [mutateCart, {}] = useMutation(ADD_ITEM_TO_CART);

    const addToCart = async () => {
        const idToken = await getUserToken();

        mutateCart({ variables: { userId: user._id, recordId: data.record._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                console.log(data);
                addToCartInState(data.addRecordToCart)
            })
            .catch(err => toast.error(err.message));
    }
    
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

                    <Button onClick={addToCart} variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
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

const mapStateToProps = state => {
    return {
      user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCartInState: (newItem) => dispatch(addToCart(newItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContent);