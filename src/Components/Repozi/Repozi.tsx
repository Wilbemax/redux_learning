import Checkbox from "@mui/material/Checkbox/Checkbox";
import { IRepo } from "../../models/models";
import classe from './Repozi.module.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


export default function Repozi({ repo }: { repo: IRepo; }) {
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
            <Checkbox icon={<FavoriteBorder />} sx={{ height: 40 }} color="error" checkedIcon={<Favorite />} />

        </div>
    );
}
