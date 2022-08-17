import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContent } from '../../context/AuthContex'

export function PrivateRoutes() {
    const { isAuthenticated } = useAuthContent();

    if (!isAuthenticated) {
        return <Navigate to='/Login' />;
    }

    return (
        <>
            <Outlet />
        </>
    );
}