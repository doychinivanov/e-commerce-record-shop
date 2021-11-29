import { Route, Routes } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ProductPage from '../pages/ProductPage';
import FavoritesPage from '../pages/FavoritesPage';

const AppRouter = () => {
    return(
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/products/:id' element={<ProductPage />} />
            <Route exact path='/favorites' element={<FavoritesPage />} />
        </Routes>
    )
}

export default AppRouter;