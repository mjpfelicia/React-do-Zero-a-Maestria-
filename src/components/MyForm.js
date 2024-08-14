import React from 'react'
import "./MyForm.css"

const MyForm = () => {
    return (
        <div className='box_form'>

            <form>
                <h1>Form</h1>
                <div>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' name='name' placeholder='Digite seu nome'></input>
                </div>
                <input type='submit' value="Enviar"></input>
            </form>
        </div>
    )
}

export default MyForm