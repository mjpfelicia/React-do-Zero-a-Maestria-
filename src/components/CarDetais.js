
const CarDetais = ({ marca, km, color,newCar }) => {
    return (
        <div className="box_destructuring">
            <h4>Detalhe do carro</h4>
            <ul>
                <li>Marca: {marca}</li>
                <li>km: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Este carro e novo</p>}
        </div>
    )
}
export default CarDetais;