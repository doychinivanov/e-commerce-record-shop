import { connect } from "react-redux";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";

import { GET_USER_CART } from "../../graphql/queries";
import { addCartState } from "../../redux/user/user-actions";

import { Container, Box } from "@mui/material";
import CartItem from "./CartItem";

const Cart = ({ theme, userId, cart, loadCartToState }) => {
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    const { loading, error, data } = useQuery(GET_USER_CART, { variables: { userId } });

    if (error) toast.error(error.message);

    if(loading){
        return null;
    }

    loadCartToState(data.userCart);

    return (

        <div style={{ 'paddingTop': 90, 'paddingBottom': 90, backgroundColor: theme.palette.background.primary, color: textColor }}>
            <Container fixed>
                    <Box sx={{ flexGrow: 1 }}>

                        {cart.length > 0
                        ?  cart.map(item => <CartItem key={item._id} item={item} theme={theme} />)
                        : <h1>This is a empty Cart</h1>
                        }

                    </Box>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.user._id,
        cart: state.user.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCartToState: (userData) => dispatch(addCartState(userData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);