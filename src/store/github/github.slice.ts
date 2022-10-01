import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IUserRepo } from '../../models/models'

const FAVOURITES_KEY = 'favourites_key'

interface IGitHubState {
    favourites: IUserRepo[]
}

function getInitState(){
    try{
        return JSON.parse(localStorage.getItem(FAVOURITES_KEY)??'[]')
    } catch{
        return []
    }
}

const initialState: IGitHubState = {
    favourites: getInitState()
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addToFavoutires(state, action: PayloadAction<IUserRepo>){
            state.favourites.push(action.payload)
            localStorage.setItem(FAVOURITES_KEY, JSON.stringify(state.favourites))
        },
        removeFromFavoutires(state, action: PayloadAction<IUserRepo>){
            state.favourites = state.favourites.filter(v=>v.id!==action.payload.id)
            localStorage.setItem(FAVOURITES_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer