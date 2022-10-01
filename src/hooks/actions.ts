import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { githubActions } from '../store/github/github.slice'
import { authActions } from '../store/auth/auth.slice'

const actions = {
    ...authActions, ...githubActions
}

export const useActions = ()=>{
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}