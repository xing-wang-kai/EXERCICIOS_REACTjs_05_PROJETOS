# PROJETO REACT JS :o:

Este projeto foi iniciado com o vite para ser usado com typescript;

```javascript

npm init vite <nome do projeto> -- --template react-ts

npm install

```
## :o: Enviando Props para Components:

Quando iniciamos um componet podemos passar valores entre eles
esses valores são chamados de props. ex. no item principal
App.tsx podemos import um componet do tipo Header
Quando importamos este componet informamos uma Props como no 
exemplo baixo, então no arquivo componet Header usamos props para
envocar puxar a mesma do componet.

ex.:

:coffee: :heavy_heart_exclamation_mark_ornament:

```javascript

< Header title="novo projeto React" /> //no componet App.ts

// no componet Header.tsx 

type Props = {
    title: string;
}

export const Header = ( props: Props ) => {
    return(
        <header>
            <h1> {props.title}</h1>
        </header>
    )
}

```