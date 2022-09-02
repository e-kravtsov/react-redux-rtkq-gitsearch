import  React  from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {FavouritesPage} from './pages/FavouritesPage'
import { Navigation } from './components/Navigation'
import {APP_ROUTES} from './services/routes'

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path={APP_ROUTES.HOME.path} element={<HomePage />}/>
      <Route path={APP_ROUTES.FAVOURITES.path} element={<FavouritesPage />}/>
    </Routes>
    </>
  )
}

export default App
