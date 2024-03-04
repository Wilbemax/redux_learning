import { useSearchUsersQuery } from "../store"

export default function () {

    const {isLoading, isError, data } = useSearchUsersQuery('wilbwmax')
    return (
        <>
            home
        </>
    )
}
