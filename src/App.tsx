import { useEffect, useState } from 'react'

import './App.css'
import '../src/Styles/css/App.css'
import NewNotes from './componets/creatnotes/NewNotes'
import Notas from './component/notas'


function App() {

  const [note, setNote]  = useState([])

  const CriarNota = (tituloValor: string, textoValor: string): void => {
    const valor = {titulo: tituloValor, texto: textoValor};
    const notas = [ ...note, valor ]
    setNote(notas)
    console.log(`valore: ${note}`)
  }

  useEffect(()=>{
    CriarNota
  }, [setNote])

  return (
    <div>
      <h1> Notas </h1>
      <div className='container'>
        <div className='container-Creat-note'>
          <NewNotes CriarNota={CriarNota} />
        </div >
        <div className='container-Render-note'>
            <Notas note={note}/>
        </div>
      </div>

    </div>
  )
}

export default App
