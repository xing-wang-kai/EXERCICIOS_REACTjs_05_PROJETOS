import React from 'react';
import NovaNota from './novaNota';

const Notas = ( props: any ) => {

    return( 
        <div>
            <h2>Estas são as notas</h2>
            {console.log(`Estou na rota Notas ${props.note}`)}
            {props.note.map( (nota: any, index: number) => {
                return <NovaNota nota={nota} />
            })}
        </div>

    )
}

export default Notas;