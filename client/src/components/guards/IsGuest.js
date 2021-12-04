import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthCtx';

const IsGuest = () => {
    const { currentUser } = useAuth();
    const location = useLocation();

    if (currentUser != null) {
        return <Navigate to="/profile"  replace={true} state={{ from: location }} />;
    }

    return <Outlet />;
};

export default IsGuest;