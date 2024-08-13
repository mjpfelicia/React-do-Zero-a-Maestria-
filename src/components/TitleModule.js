import styles from "./Title.module.css";


const TitleModule = () => {
    return (
        <div className="box_module">
            <h1 className={styles.my_title}>Meu titulo</h1>
            <h2 className="my_title">Não recebe o css module</h2>

        </div>
    )
}

export default TitleModule;