import React, {useState} from 'react'
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IUserRepo } from '../models/models';

export const Repo: React.FC<{repo: IUserRepo}> = ({repo})=>{

    const {addToFavoutires, removeFromFavoutires} = useActions()
    const favourites = useAppSelector(state=>state.github.favourites)

    const [isFavourite, setIsFavourite] = useState(favourites.some(v=>repo.id===v.id))

    const addToFavouritesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addToFavoutires(repo)
        setIsFavourite(true)
    }

    const removeFromFavouritesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFromFavoutires(repo)
        setIsFavourite(false)
    }

    return (
        <div className="border py-2 px-4 mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target="_blank">
                <h2 className="text-md font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo.description}</p>
            </a>
            {!isFavourite && <button
                className="py-2 px-4 bg-orange-300 rounded hover:shadow-md transition-all"
                onClick={addToFavouritesClick}
            >
                Add to Favourites
            </button>}
            {isFavourite && <button
                className="py-2 px-4 bg-red-300 rounded hover:shadow-md transition-all"
                onClick={removeFromFavouritesClick}
            >
                Remove from Favourites
            </button>}
        </div>
    )
}