
const ShowUserName = (props) => {
    return (
        <div className="box_props">
            <h5>Introdução de props</h5>
            <div>
                <h3> O nome do  usuário: {props.name}</h3>
            </div>

        </div>
    )
}
export default ShowUserName;