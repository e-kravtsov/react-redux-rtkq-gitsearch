import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const AUTH_KEY = 'token'

interface IAuthState {
    isLoggedIn: boolean;
    token: string;
}

function getInitState(){
    try{
        const token = localStorage.getItem(AUTH_KEY)||''
        return {isLoggedIn: token.length>0, token}
    } catch{
        return {isLoggedIn: false, token: ''}
    }
}

const initialState: IAuthState = getInitState()

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>){
            state.token = action.payload
            localStorage.setItem(AUTH_KEY, state.token)
            state.isLoggedIn = true
        },
        logout(state){
            state.token = ''
            state.isLoggedIn = false
            localStorage.removeItem(AUTH_KEY)
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer