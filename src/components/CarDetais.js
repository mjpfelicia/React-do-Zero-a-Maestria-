import "./CarDetais.css"
const CarDetais = ({ marca, km, color,newCar }) => {
    return (
        <div className="box_destructuring">
            <h4 className="title_destructuring">Detalhe do carro</h4>
            <ul>
                <li>Marca: {marca}</li>
                <li>km: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Este carro novo 0km rodados!</p>}
        </div>
    )
}
export default CarDetais;