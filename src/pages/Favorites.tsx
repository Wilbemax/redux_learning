import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux"
import classe from "./Home/Home.module.css"
import Repozi from "../Components/Repozi/Repozi";
import { IRepo } from "../models/models";

export default function Favorites() {

    const { favorites } = useAppSelector(state => state.github)
    const [favoriteRepos, setFavoriteRepos] = useState<IRepo[]>([]);
    const [loading, setLoading] = useState(true)



    console.log(favoriteRepos)
    useEffect(() => {
        const fetchFavoriteRepos = async () => {
            const repoPromises = favorites.map((fullName: string) =>
                fetch(`https://api.github.com/repos/${fullName}`)
                    .then(response => response.json())
            );
            const repoData = await Promise.all(repoPromises);
            setLoading(false);
            setFavoriteRepos(repoData); // Теперь TypeScript знает, что repoData - это массив объектов типа Repo
        };

        fetchFavoriteRepos();
    }, [favorites]);


 


return (
    <div className="container">
        <div className={classe.main}>
            {loading ? <p className={classe.title}>Loading your favorites repos...</p> : favoriteRepos.length === 0 ? <p className={classe.title}>There are no favorites yet</p> : <> <p className={classe.title}>Yore favorites</p>
                {favoriteRepos?.map(repo => <Repozi repo={repo} key={repo.id} />)}</>}
            { }

        </div>

    </div >
)
}
