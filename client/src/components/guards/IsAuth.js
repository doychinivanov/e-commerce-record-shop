import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthCtx';

const IsAuth = () => {
    const { currentUser } = useAuth();
    const location = useLocation();

    if (currentUser == null) {
        console.log('No user')

        return <Navigate to='/' replace={true} state={{ from: location }} />;
    }

    return <Outlet />;
};

export default IsAuth;