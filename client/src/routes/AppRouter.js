import { Route, Routes } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ProductPage from '../pages/ProductPage';

const AppRouter = () => {
    return(
        <Routes>
            <Route exact path='/' element={<LandingPage/>} />
            <Route exact path='/products/:id' element={<ProductPage/>} />
        </Routes>
    )
}

export default AppRouter;