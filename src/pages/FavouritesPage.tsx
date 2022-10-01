import React from "react"
import { useAppSelector } from '../hooks/redux'
import {Repo} from '../components/Repo'
export const FavouritesPage: React.FC = ()=>{

    const {favourites} = useAppSelector(state=>state.github)

    return (
        <div className="flex justify-center pt-10 mx-auto">
            <div className="relative w-[600px]">
            <div className="py-2 text-lg font-bold">Favourites</div>
            <div className="container">
                    {favourites?.map(repo=>(<Repo repo={repo} key={repo.id} />))}
                </div>
            </div>
        </div>
    )
}