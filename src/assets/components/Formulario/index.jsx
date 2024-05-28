import { useEffect, useState } from "react"

const Formulario = () =>{
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() =>{
        console.log('O componente iniciou') // O componente montado

        return () =>{
            console.log('O componente finalizou') // Componente desmontado
        }
    },[]) //Dependência vazia: useEffect é executado uma vez na montagem e a função de limpeza na desmontagem

    useEffect(() =>{
        console.log('O estado do nome mudou')
    },[nome]) // Dependência: useEffect é executado sempre que o estado muda

    useEffect(() =>{
        console.log('A matéria A mudou para: ' + materiaA)
    },[materiaA])

    const alteraNome = (evento) => {
        setNome(evento.target.value)
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if(media >= 7){
            return (
                <p>Olá {nome}, você foi aprovado! Média: {media}</p>
            )
        }else{
            return(
                <p>Olá {nome}, você não foi aprovado. Média: {media}</p>
            )
        }
    }

    return(
        <form>
            <input type="text" placeholder="Digite o seu nome" onChange={alteraNome}/>
            <br/>
            <br/>
            <input type="number" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario