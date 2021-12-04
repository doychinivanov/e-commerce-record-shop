import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthCtx';

const IsAdmin = () => {
    const { userRole } = useAuth();
    const location = useLocation();

    return (
        <>

            {userRole !== 'admin'
                ?
                <Navigate to="/"  replace={true} state={{ from: location }} />
                :
                <Outlet />
            }
        </>
    )
}

export default IsAdmin;