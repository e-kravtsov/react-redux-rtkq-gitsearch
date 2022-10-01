import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { useActions } from "../hooks/actions";
import { useAppSelector } from '../hooks/redux';
import { APP_ROUTES } from "../services/routes";

export const LoginPage: React.FC = ()=>{
    const {isLoggedIn} = useAppSelector(state=>state.auth)
    const {login: loginAction} = useActions()

    const navigate = useNavigate()

    useEffect(()=>{
      if(isLoggedIn){
        navigate(APP_ROUTES.HOME.path)
      }
    }, [isLoggedIn])

    const login = (name: string, password: string)=>{
      if(name && password){
        loginAction('some token')
        navigate(APP_ROUTES.HOME.path)
      }
    }
    return(
        <div className="flex flex-col justify-center items-center h-[calc(100vh_-_60px)]">
            <Form type="login" onSubmit={login}/>
        </div>
      )
}