import {useState} from "react";

import Perfil from './assets/components/Perfil'
import Formulario from './assets/components/Formulario'
import RepoList from './assets/components/RepoList'

// No React, o return é usado dentro de um componente de função (functional component) para definir o que esse componente deve renderizar. Essencialmente, o return especifica o JSX (JavaScript XML) que será convertido em HTML e exibido na interface do usuário.

function App() {
  // const [formEstaVisivel, setFormEstaVisivel] = useState(true)

  return (
    //eu consigo utilizar os componentes (que são basicamentes funções) como tags.
    //como qualquer outra tag no html, posso utilizar propriedades dentro dessas tags.
    <>
      <Perfil nomeDoUsuario="marcelokg" />
      <RepoList/>

      {/* {formEstaVisivel && <Formulario/>}
      <button onClick={() => setFormEstaVisivel(!formEstaVisivel)} type='button'>Toggle Form</button> */}
    </>
  )
}

export default App
