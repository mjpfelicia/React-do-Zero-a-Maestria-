
const UserDatails = ({ name, age, job }) => {
    return (
        <div className="box_desafio">
            <h2>Desafio</h2>
            <h4>{name}</h4>
            <p>Idade:{age}</p>
            <p>profissão:{job}</p>
            {age >= 18 ? (<p className="maior">Pode tirar a habilitação.</p>):
            (
                <p className="menor">Menor de Idade.</p>
            )}


        </div>
    );
};

export default UserDatails