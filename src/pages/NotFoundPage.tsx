import React from "react"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "../services/routes"
export const NotFoundPage: React.FC = ()=>{
    return (
        <main className="flex flex-col items-center pt-10">
        <p className="text-xl">Page not found</p>
        <p className="text-xl text-gray-400 underline"><Link to={APP_ROUTES.HOME.path}>Home</Link></p>
        </main>
    )
}