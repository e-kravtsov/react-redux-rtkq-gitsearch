import React from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { APP_ROUTES } from '../services/routes';
import { useActions } from "../hooks/actions";

export const Navigation: React.FC = ()=>{
    const currentPath = useLocation().pathname
    const navigate = useNavigate()
    const {isLoggedIn} = useAppSelector(state=>state.auth)
    const {logout: logoutAction} = useActions()

    const logout=()=>{
        logoutAction()
        navigate(APP_ROUTES.LOGIN.path)
    }

    return (
        <nav className="flex justify-between items-center h-[60px] px-6 shadow-md bg-gray-500 text-white">
            <h3 className="font-bold">Github search</h3>
            {isLoggedIn && <span>
                <Link
                  to={APP_ROUTES.HOME.path}
                  className={`mr-3 ${currentPath===APP_ROUTES.HOME.path?'underline':''}`}
                >Home</Link>
                <Link
                  to={APP_ROUTES.FAVOURITES.path}
                  className={`mr-3 ${currentPath===APP_ROUTES.FAVOURITES.path?'underline':''}`}
                 >Favourites</Link>
                 <a
                   className="cursor-pointer"
                   onClick={logout}
                 >Logout</a>
            </span>}
        </nav>
    )
}