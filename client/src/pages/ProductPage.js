import NavBar from '../components/common/header/NavBar';
import Footer from '../components/common/footer/Footer';
import { useColorMode } from "../contexts/ColorModeCtx";
import { useParams } from "react-router-dom";
import ProductDetails from '../components/details/ProductDetails';

const ProductPage = () => {
    const {theme} = useColorMode();
    const { id } = useParams();

    return (
        <>
            <NavBar theme={theme}/>
            <div style={{ 'padding-top': 90, 'padding-bottom': 90,}}>
                <ProductDetails id={id} />
            </div>
            <Footer theme={theme}/>
        </>
    )
}

export default ProductPage;