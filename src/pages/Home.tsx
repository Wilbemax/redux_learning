import { useState } from "react"
import { useSearchUsersQuery } from "../store/github/gtihub.api"
import { useDebouncedSearch } from "../hooks/useDebouncedSearch/useDebouncedSearch"
import { IUser } from "../models/models"

export default function Home() {
    const [search, setSearch] = useState('')

    const debouncedSearch = useDebouncedSearch(search)
    const { isLoading, isError, data } = useSearchUsersQuery(debouncedSearch, {
        skip: debouncedSearch.length <= 0,
        refetchOnFocus: true
    })

    console.log(debouncedSearch);
    console.log(search);


    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p>Somethig went wrong</p>}

            <div className="relative w-[560px]">
                <input type="text" className="border py-2 px-4 w-full h-[42px] mb-2" placeholder="Search for Github username..." value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                <ul className="absolute top-[42px] left 0 right-0 max-h-[200px] shadow-md bg-wigth">
                    {isLoading && <p>Loading... plz wait</p>}
                    {data?.map((user: IUser) => (
                        <li key={user.id}>{user.login}</li>
                    ))}
                </ul>
            </div>


        </div>
    )
}
