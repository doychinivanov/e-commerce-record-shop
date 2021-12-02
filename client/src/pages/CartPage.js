import { useColorMode } from "../contexts/ColorModeCtx";

import NavBar from '../components/common/header/NavBar';
import CartParent from "../components/cart/CartParent";
import Footer from '../components/common/footer/Footer';

const CartPage = () => {
    const {theme} = useColorMode();

    return (
        <>
            <NavBar theme={theme}/>
            <div style={{ 'paddingTop': 50, 'paddingBottom': 15}}>
                <CartParent theme={theme}/>
            </div>
            <Footer theme={theme}/>
        </>
    )
}

export default CartPage;