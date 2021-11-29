import { useColorMode } from "../contexts/ColorModeCtx";

import NavBar from '../components/common/header/NavBar';
import FavoritesList from "../components/favorites/FavoritesList";
import Footer from '../components/common/footer/Footer';

const FavoritesPage = () => {
    const {theme} = useColorMode();

    return (
        <>
            <NavBar theme={theme}/>
            <div style={{ 'paddingTop': 50, 'paddingBottom': 15}}>
                <FavoritesList theme={theme} />
            </div>
            <Footer theme={theme}/>
        </>
    )
}

export default FavoritesPage;