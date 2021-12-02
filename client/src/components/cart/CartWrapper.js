import { connect } from "react-redux";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import {toast} from 'react-toastify';

import { GET_USER_CART } from "../../graphql/queries";
import { addCartState } from "../../redux/user/user-actions";

import Cart from "./Cart";

const CartWrapper = ({theme, userId, loadCartToState}) => {

    const { loading, error, data } = useQuery(GET_USER_CART, { variables: { userId } });

    useEffect(() => {
        if(!loading && data) loadCartToState(data.userCart);
    }, [loading, data])
    
    if(error) toast.error(error.message);

    return (
        <Cart theme={theme} userId={userId} />
    )
}


const mapStateToProps = state => {
    return {
        userId: state.user._id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCartToState: (userData) => dispatch(addCartState(userData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartWrapper);