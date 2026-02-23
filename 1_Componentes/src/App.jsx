//Compenente pai
import './App.css'

// Importar o componente filho
import ComponentsFuncional from './components/ComponentsFuncional'
import ClassComponente from './components/ClassComponente'
import PropsExemplo from './components/PropsExemplo'

function App() {

  return (
    <>
      <h1>Teste ao vivo</h1>
      {/*Utilizando o componente importado no JSX */}
      <ComponentsFuncional />
      <ClassComponente />
      <PropsExemplo nome="Mundo!" anos={25} />
    </>
  )
}

export default App
