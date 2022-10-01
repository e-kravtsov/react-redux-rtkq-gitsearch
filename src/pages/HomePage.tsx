import React, {useState, useEffect} from 'react'
import { useSearchUsersQuery, useLazyGetUserReposQuery } from '../store/github/github.api'
import { useDebounce } from '../hooks/debounce'
import {Repo} from '../components/Repo'

export const HomePage: React.FC = ()=>{
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const {isLoading, isError, data}=useSearchUsersQuery(debounced, {
        skip: debounced.length<3,
        refetchOnFocus: true
    })

    const [fetchRepos, {isLoading: isReposLoading, data: repos}] = useLazyGetUserReposQuery()

    useEffect(()=>{
        setDropdown(debounced.length>3&&data?.length!>0)
    },[debounced, data])

    const clickHandler = (username: string)=>{
        fetchRepos(username)
        setDropdown(false)
    }
    return (
        <div className="flex justify-center pt-10 mx-auto">
            {isError && <p className="text-center text-red-600">Something went wrong...</p>}
            

            <div className="relative w-[600px]">
                <input
                    type="text"
                    className="border py-2 px-4 w-full h-[48px] mb-3"
                    placeholder="Search for Github by username..."
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                />

                {dropdown && <ul className="absolute top-[48px] left-0 right-0 max-h-[300px] overflow-y-scroll shadow-md bg-white">
                {isLoading && <p className="text-center">Loading...</p>}
                {data?.map(user=>(
                    <li
                        key={user.id}
                        className="py-2 px-4 hover:bg-gray-300 hover:text-white transition-colors cursor-pointer"
                        onClick={()=>clickHandler(user.login)}
                    >{user.login}</li>
                ))}
                </ul>}

                <div className="container">
                    {isReposLoading && <p className="text-center">Loading repos...</p>}
                    {repos?.map(repo=>(<Repo repo={repo} key={repo.id} />))}
                </div>
            </div>
        </div>
    )
}