import Checkbox from "@mui/material/Checkbox/Checkbox";
import { IRepo } from "../../models/models";
import classe from './Repozi.module.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useAction } from "../../hooks/action";
import { useAppSelector } from "../../hooks/redux";
import { useState } from "react";


export default function Repozi({ repo }: { repo: IRepo; }) {

    const { addFavorites, removeFavorites } = useAction()
    const { favorites } = useAppSelector(state => state.github)
    const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.full_name))

    function addToFavorite(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        addFavorites(repo.full_name)
        setIsFavorite(true)
    }
    function removeFavorite(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        removeFavorites(repo.full_name)
        setIsFavorite(false)
    }

    return (
        <div className={classe.box}>
            <a href={repo.html_url} target="_blank" className={classe.link}>

                <p className={classe.title}>
                    {repo.name}
                </p>
                <div className={classe.dopInf}>
                    <p className={classe.inf}>Froks: {repo.forks}</p>
                    <p className={classe.inf}>Watchers: {repo.watchers}</p>
                </div>
                {repo.description && (
                    <p className={classe.des}>{repo.description}</p>
                )}
            </a>

            {!isFavorite && <Checkbox icon={<FavoriteBorder />} sx={{ height: 40 }} onClick={(e) => addToFavorite(e)} color="error" checkedIcon={<Favorite />} />}       
            {isFavorite && <Checkbox icon={<FavoriteBorder />} sx={{ height: 40 }} defaultChecked onClick={(e) => removeFavorite(e)} color="error" checkedIcon={<Favorite />} />}

        </div>
    );
}
