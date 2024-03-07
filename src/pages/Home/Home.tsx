import { useEffect, useState } from "react"
import { useLazyGetUserRepoQuery, useSearchUsersQuery } from "../../store/github/gtihub.api"
import { useDebouncedSearch } from "../../hooks/useDebouncedSearch/useDebouncedSearch"
import { IUser } from "../../models/models"
import { Box, ListItem, ListItemButton, TextField, ListItemText } from "@mui/material"

import classes from './Home.module.css'
import Repozi from "../../Components/Repozi/Repozi"

export default function Home() {
    const [search, setSearch] = useState('')
    const [dropDown, setDropDown] = useState(false)

    const debouncedSearch = useDebouncedSearch(search)
    console.log(debouncedSearch);

    const { isLoading, isError, data } = useSearchUsersQuery(debouncedSearch, {
        skip: debouncedSearch.length <= 2,
        refetchOnFocus: true
    })

    const [helpText, setHelpText] = useState('')

    if(isError){
        setHelpText('Something went wrong... Please try later.')
    }


    useEffect(() => {
        setDropDown(!!(debouncedSearch.length >= 2 && data && data.length > 0));
    }, [debouncedSearch, data]);
    
    const [fetchResponse, { isLoading: areRepoLoading, data: repos }] = useLazyGetUserRepoQuery()

    const handlClick = (username: string) => {
        fetchResponse(username)
        setDropDown(!dropDown)
    }
    console.log(data);

    return (
        <div className="container">
            <div className={classes.main}>
                


                <TextField sx={{ width: '100%', maxWidth: 500 }} error={isError} fullWidth helperText={helpText} type="text" label="Search for Github username..." value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                {dropDown && <Box
                    sx={{ width: '100%', maxHeight: 200, maxWidth: 500, bgcolor: 'background.paper', overflowY: 'scroll', }}>
                    <div>
                        {data?.map((user: IUser) => (
                            <ListItem key={user.id} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText onClick={() => handlClick(user.login)}>
                                        {isLoading && <p>Loading... plz wait</p>}
                                        {user.login}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </div>
                </Box>}
                {areRepoLoading && <p className={classes.title}>Repositories are loading...</p>}
                {repos && <p className={classes.title}>All repositories</p>}
                {repos?.map(repo => <Repozi repo={repo} key={repo.id} />)}
            </div>
        </div>

    )
}
