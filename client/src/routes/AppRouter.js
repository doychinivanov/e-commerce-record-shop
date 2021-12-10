import { Route, Routes } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ProductPage from '../pages/ProductPage';
import FavoritesPage from '../pages/FavoritesPage';
import CartPage from '../pages/CartPage';
import CreateRecordPage from '../pages/CreateRecordPage';

import IsAuth from '../components/guards/IsAuth';
import IsAdmin from '../components/guards/IsAdmin';

const AppRouter = () => {
    return(
        <Routes>
            <Route exact path='/*' element={<LandingPage />} />
            <Route exact path='/products/:id' element={<ProductPage />} />
            <Route element={<IsAuth />}>
                <Route exact path='/favorites' element={<FavoritesPage />} />
                <Route exact path='/cart' element={<CartPage />} />
            </Route>
            <Route element={<IsAdmin/>}>
                <Route exact path='/create' element={<CreateRecordPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;