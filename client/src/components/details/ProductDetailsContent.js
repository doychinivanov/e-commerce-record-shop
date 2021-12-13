import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import {Link} from 'react-router-dom';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { useAuth } from '../../contexts/AuthCtx';
import { addToCart } from '../../redux/user/user-actions';
import { turnModalOn } from '../../redux/authModal/modal-actions';
import { ADD_ITEM_TO_CART } from '../../graphql/mutations';
import { getUserToken } from '../../api/apiUtils';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid, Button } from "@mui/material";

import styles from './ProductDetailsContent.module.css';

const ProductDetailsContent = ({theme, data, addToCartInState, user, turnModalOn }) => {
    const { userRole } = useAuth();
    const buttonColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

    const [mutateCart, {}] = useMutation(ADD_ITEM_TO_CART);

    const addToCart = async () => {

        if (!user) {
            toast.warning('You must be signed in.')
            return turnModalOn();
        }
        
        const idToken = await getUserToken();

        mutateCart({ variables: { userId: user._id, recordId: data.record._id }, context: { headers: { 'x-authorization': idToken } } })
            .then(({data}) => {
                addToCartInState(data.addRecordToCart);
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

                    {userRole
                    ? 
                    <>
                    <Link style={{marginLeft: 15, marginRight: 15}} to={`/edit/${data.record._id}`}>
                        <Button variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
                            <span style={{ color: buttonColor, display: 'flex' }}>
                                <EditOutlinedIcon />
                                <span style={{ color: buttonColor }} className={styles['btn-content']}>Edit</span>
                            </span>
                        </Button>
                    </Link>

                    <Button variant={theme.palette.mode === 'dark' ? "outlined" : "contained"}>
                        <span style={{ color: buttonColor, display: 'flex' }}>
                            <DeleteOutlineOutlinedIcon />
                            <span style={{ color: buttonColor }} className={styles['btn-content']}>Delete</span>
                        </span>
                    </Button>
                    </>
                    : null
                    }
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
        addToCartInState: (newItem) => dispatch(addToCart(newItem)),
        turnModalOn: () => dispatch(turnModalOn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContent);