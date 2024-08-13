
import React, { useState } from 'react';

const SomaValores = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado, setResultado] = useState('')

    const handleSoma = () => {
        const soma = parseInt(valor1, 10) + parseInt(valor2, 10);
        setResultado(soma);
    };

    return (
        <div className='box_soma'>
            <h2 style={
                { color: "blueviolet", fontSize: "1rem", padding: "2rem",borderTop:"2px solid red" }
            }>Soma de dois números com Click </h2>
            <div className='input_soma'>
                <input type="number" className='btn2' placeholder="Digite o primeiro valor" onChange={(e) => setValor1(e.target.value)} />
                <input type="number" placeholder="Digite o segundo valor" onChange={(e) => setValor2(e.target.value)} />
                <button onClick={handleSoma}>Somar</button>
                <p>Resultado: {resultado}</p>
            </div>

        </div>
    );
}

export default SomaValores;
