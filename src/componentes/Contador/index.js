import React, { useState } from 'react';
import './style.css';

function Contador(){
    
    const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

    function incrementar() {
        let numeroIncrementado = numeroAleatorio+1;
        setNumeroAleatorio(numeroIncrementado);
    }

    return (
        <div id='contador'>
            <p>
                Clique no botão abaixo para incrementar +1 ao número da Tela
            </p>
            <h1>{numeroAleatorio}</h1>
            <button onClick={incrementar}>Incrementar +1</button>
        </div>
    );
}

export default Contador;