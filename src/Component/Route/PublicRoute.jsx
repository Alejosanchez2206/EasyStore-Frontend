import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContent } from '../../context/AuthContex'

export function PublicRoutes() {
    const { isAuthenticated } = useAuthContent();

    if (isAuthenticated) {
        return <Navigate to='/' />;
    }

    return (
        <>
            <Outlet />
        </>
    );
}