import { connect } from "react-redux";

import { Container, Box } from "@mui/material";
import CartItem from "./CartItem";

const Cart = ({ theme,  cart, userId }) => {
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    if(!cart) return null;

    return (  

        <div style={{ 'paddingTop': 90, 'paddingBottom': 90, backgroundColor: theme.palette.background.primary, color: textColor }}>
            <Container fixed>
                    <Box sx={{ flexGrow: 1 }}>

                        {cart?.length > 0
                        ?  cart?.map(item => <CartItem key={item._id} item={item} theme={theme} userId={userId} />)
                        : <h1>This is a empty Cart</h1>
                        }

                    </Box>

                    <h1>Total Price: {cart.reduce((acc, curr) => acc + (curr?.quantity * curr?.record?.price), 0)}</h1>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.user.cart
    }
}


export default connect(mapStateToProps)(Cart);