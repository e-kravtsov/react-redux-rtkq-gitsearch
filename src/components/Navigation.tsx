import React from 'react'
import { Link, useLocation  } from 'react-router-dom'
import { APP_ROUTES } from '../services/routes'

export function Navigation(){
    const currentPath = useLocation().pathname

    return (
        <nav className="flex justify-between items-center h-[60px] px-6 shadow-md bg-gray-500 text-white">
            <h3 className="font-bold">Github search</h3>
            <span>
                <Link
                  to={APP_ROUTES.HOME.path}
                  className={`mr-3 ${currentPath===APP_ROUTES.HOME.path?'underline':''}`}
                >Home</Link>
                <Link
                  to={APP_ROUTES.FAVOURITES.path}
                  className={`mr-3 ${currentPath===APP_ROUTES.FAVOURITES.path?'underline':''}`}
                 >Favourites</Link>
            </span>
        </nav>
    )
}