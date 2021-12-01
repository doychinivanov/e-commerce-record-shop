import { connect } from "react-redux";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";

import { GET_USER_CART } from "../../graphql/queries";

import { Container, Box } from "@mui/material";

const Cart = ({theme, userId}) => {
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    const { loading, error, data } = useQuery(GET_USER_CART, {variables: {userId}});

    if(error) toast.error(error.message);

    console.log(data.userCart);

    return (
        <div style={{ 'paddingTop': 90, 'paddingBottom': 90, backgroundColor: theme.palette.background.primary, color: textColor }}>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <h1>This is Cart</h1>
                </Box>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.user._id
    }
}

export default connect(mapStateToProps)(Cart);