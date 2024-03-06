import { IRepo } from "../../models/models";
import classe from './Repozi.module.css'

export default function Repozi({ repo }: { repo: IRepo }) {
    return (
        <a href={repo.html_url} target="_blank" className={classe.box}>

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
    )
};
