import { useState } from 'react'



const IfEElse = () => {
    const [name,setName] = useState("Sandra")

    return (
        <div>
            <h5>If ternário</h5>
            {name === "João" ? (
                <div>
                    <p>O nome é Sandra</p>
                </div>) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <h6>renderização o componente para trazer informações atualizada</h6>
            <button onClick={() => setName("João")}>Clica aqui!</button>
        </div>
    )
}
export default IfEElse;