import { useState } from "react";

const ManageData = () => {
    let someDate = 10;

    console.log(someDate);

    const [number, setNumber] = useState(15);


    return (

        <div className='box_useState'>
            <h2>useState na prática</h2>
            <div className="whapper_someDate">
                <p>valor:{someDate}</p>
                <button onClick={() => (someDate = 15)}> Mudar variável</button>
            </div>
            <div className="whapper_someDate">valo:{number}</div>
            <button onClick={() => setNumber(25)}>Muda o state</button>
        </div>



    )
}

export default ManageData;