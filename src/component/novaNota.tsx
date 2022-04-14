import React from 'react';
import './styles/css/style.css'

const NovaNota = ( props: any ) => {

    return(
        <section className='notas-format'>
            <h3>{props.nota.titulo}</h3>
            <p>{props.nota.texto}</p>
        </section>
        )
}

export default NovaNota;