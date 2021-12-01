import { Route, Routes } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ProductPage from '../pages/ProductPage';
import FavoritesPage from '../pages/FavoritesPage';
import CartPage from '../pages/CartPage';

const AppRouter = () => {
    return(
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/products/:id' element={<ProductPage />} />
            <Route exact path='/favorites' element={<FavoritesPage />} />
            <Route exact path='/cart' element={<CartPage />} />
        </Routes>
    )
}

export default AppRouter;