import { Route, Routes } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

const AppRouter = () => {
    return(
        <Routes>
            <Route exact path='/' element={<LandingPage/>} />
        </Routes>
    )
}

export default AppRouter;