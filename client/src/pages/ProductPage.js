import NavBar from '../components/common/header/NavBar';
import Footer from '../components/common/footer/Footer';
import { useColorMode } from "../contexts/ColorModeCtx";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const {theme} = useColorMode();
    const { id } = useParams();

    console.log(id);

    return (
        <>
            <NavBar theme={theme}/>
            <div style={{ 'padding-top': 90, 'padding-bottom': 90,}}>
                <h1>this is a details page</h1>
            </div>
            <Footer theme={theme}/>
        </>
    )
}

export default ProductPage;