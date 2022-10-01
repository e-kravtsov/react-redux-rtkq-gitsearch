import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux';

export const ProtectedRoutes = () => {
  const {isLoggedIn} = useAppSelector(state=>state.auth)
return (
    isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
  )
}