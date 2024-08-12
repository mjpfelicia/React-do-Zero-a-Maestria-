 
const ChangeMessageState = ({ handleMessage }) => {
    const messages = ["oi", "Olá", "Oi,tudo bem?"]

    return (
        <div className="box_message">
            <button onClick={() => handleMessage(messages[0])}>0</button>
            <button onClick={() => handleMessage(messages[1])}>1</button>
            <button onClick={() => handleMessage(messages[2])}>2</button>
        </div>
    )
}

export default ChangeMessageState;