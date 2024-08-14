import React, { useState } from 'react'
import "./MyForm.css"

const MyForm = () => {
    // 3 - gerenciamento de dados 
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name);
    // console.log(email)

    const handleSubmit = (event) => {
        // manipularEnviar
        event.preventDefault();
        console.log("Enviando o formulário")
        console.log(name);
        console.log(email)
    }

    return (
        <div className='box_form'>
            {/* 5 - envio de form */}
            {/* 1 - Criando form*/}
            <form onSubmit={handleSubmit}>
                <h1>Form</h1>
                <div>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' name='name' placeholder='Digite seu nome' onChange={handleName}></input>
                </div>

                {/* 2 - Label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    {/* 4 - simplificação de manipulação de state */}
                    <input type='email' name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <input type='submit' value="Enviar"></input>
            </form>
        </div>
    )
}

export default MyForm;