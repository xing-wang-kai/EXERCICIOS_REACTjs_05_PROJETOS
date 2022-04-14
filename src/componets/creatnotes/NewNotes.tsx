import React, { useEffect, useState } from 'react';

const NewNotes = ( props: any ) => {

    const [ titulo, setTitulo ] = useState("")
    const [ texto, setTexto ] = useState("")

    const handleTitle = (e:any ) => {
        const valor = e.target.value;
        setTitulo(valor)
    }
    const handleText = (e:any ) => {
        const valor = e.target.value;
        setTexto(valor)
    }
    const CriarNewNota = (e : any) => {
        e.preventDefault();
        e.stopPropagation();
        props.CriarNota(titulo, texto)
    }
    useEffect(()=>{
        CriarNewNota
      }, [setTitulo])

    return(
        <fieldset >
            <legend>Crie Sua nota</legend>
            <form onSubmit={CriarNewNota}>
                <label >Titulo: <br/>
                <input onChange={handleTitle}
                       type='text' name='titulo' 
                       placeholder='Insert your note title' 
                       className="Create-note-input"/>
            </label>
            <label>Conteúdo: 
                <textarea onChange={handleText}
                          name="texto"
                          placeholder='Insert your note text' 
                          className="Create-note-input" />
            </label>
            <br/>
            <button type='submit' className='Create-note-button'>Criar</button>
            </form >
        </fieldset>
        )
}

export default NewNotes;