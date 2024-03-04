import { configureStore } from "@reduxjs/toolkit"
import { githubApi } from "./github/gtihub.api"


export const store = configureStore({
    reducer:{
        [githubApi.reducerPath] : githubApi.reducer
    }
})

export const {useSearchUsersQuery} = githubApi