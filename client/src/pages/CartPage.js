import { useColorMode } from "../contexts/ColorModeCtx";

import NavBar from '../components/common/header/NavBar';
import CartWrapper from "../components/cart/CartWrapper";
import Footer from '../components/common/footer/Footer';

const CartPage = () => {
    const {theme} = useColorMode();

    return (
        <>
            <NavBar theme={theme}/>
            <div style={{ 'paddingTop': 50, 'paddingBottom': 15}}>
                <CartWrapper theme={theme}/>
            </div>
            <Footer theme={theme}/>
        </>
    )
}

export default CartPage;