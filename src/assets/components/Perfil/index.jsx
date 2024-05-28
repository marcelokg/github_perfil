import styles from './Perfil.module.css' 

//é necessário colocar como parâmetro 'props' para utilizar as propriedades.
const Perfil = ({nomeDoUsuario}) => {
    // posso apagar esse bloco quando utilizo o props.
    // const usuario = {
    //     nome: 'Marcelo Kriiger',
    //     avatar: 'https://github.com/marcelokg.png'
    // }

    return(
        //className refere a classe CSS.
        //class o react entende como classes de objetos.
        //JSON.stringfy converte um objeto para uma string
        <header className={styles.header}>
            {/* {JSON.stringify(props)}  */}
            <img className={styles.avatar} src={`https://github.com/${nomeDoUsuario}.png`}/>
            <h1 className={styles.name} >{nomeDoUsuario}</h1>
        </header>
    )

}

export default Perfil