import React, { useState } from 'react'

interface FormInputProps {
    type: 'login'|'signup';
    onSubmit: (name:string, password:string)=>void;
}

export const Form: React.FC<FormInputProps> = ({onSubmit, type})=>{

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onFormSubmit = (evt: React.MouseEvent<HTMLButtonElement>)=>{
        evt.preventDefault()
        onSubmit(name, password)
    }

    return (
        <div className="relative w-[600px] p-8 border shadow-sm">
          <h1 className="text-center text-lg">{type==='login'?'Please Log In':'Please Sign Up'}</h1>
        <form>
          <label>
            <p>Username</p>
            <input
                placeholder="Just type any text"
                type="text"
                className="border py-2 px-4 w-full h-[48px] mb-3"
                onChange={evt=>setName(evt.target.value)}
                />
          </label>
          <label>
            <p>Password</p>
            <input
                placeholder="Just type any text"
                type="password"
                className="border py-2 px-4 w-full h-[48px] mb-3"
                onChange={evt=>setPassword(evt.target.value)}
            />
          </label>
          <div>
            <button
                type="submit"
                className="block h-[48px] hover:bg-gray-300 bg-gray-400 w-full text-white font-bold"
                onClick={onFormSubmit}
            >{type==='login'?'Login':'Sign Up'}</button>
          </div>
        </form>
        </div>
    )
}