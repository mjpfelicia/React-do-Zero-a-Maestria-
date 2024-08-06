import { useState } from 'react'

const ListeRender = () => {
    // problema na hora de usa o índice quando for deletar
    const [list] = useState(["Sandra", "Pedro", "Maria"]);

    // recomendado usar id único
    const [users,setUsers] = useState([
        { id: 1, name: "Sandra", age: 48 },
        { id: 2, name: "Maria", age: 15 },
        { id: 3, name: "pedro", age: 28 }
    ])


    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div className='box_ListeRender' >
            <h4>ListeRender</h4>
            <h6>A propriedade key, previous this.state.first</h6>

            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}-{user.age}
                    </li>
                ))}

            </ul>
            <button onClick={deleteRandom}>Deletar random user</button>
        </div>
    );
};

export default ListeRender;