import { useEffect } from "react"
import { useState } from "react"

import styles from './RepoList.module.css'

const RepoList = () => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/marcelokg/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 1000)
        })
    },[])

    return (
        <div className="container">
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}

            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li  className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {repositorio.language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RepoList