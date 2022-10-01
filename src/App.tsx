import  React  from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {FavouritesPage} from './pages/FavouritesPage'
import { Navigation } from './components/Navigation'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import {APP_ROUTES} from './services/routes'

export const App: React.FC = ()=>{
  return (
    <>
    <Navigation/>
    <Routes>
      <Route element={<ProtectedRoutes/>}>
        <Route path={APP_ROUTES.HOME.path} element={<HomePage />}/>
        <Route path={APP_ROUTES.FAVOURITES.path} element={<FavouritesPage />}/>
      </Route>
      <Route path={APP_ROUTES.LOGIN.path} element={<LoginPage />}/>
      <Route path="*" element={<NotFoundPage />}/>   
    </Routes>
    </>
  )
}
