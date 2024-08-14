import React from 'react'
import "./DesafioCar.css"
import styles from "./DesafioCar.module.css"



const DesafioCar = ({ car }) => {

    return (
        <div className='box_desafio'>
            <div className={styles.card}>
                <h1>Showroom de carros</h1>

                <h4>{car.name}</h4>
                <p>Km:{car.Km}</p>
                <p>cor:{car.color}</p>

            </div>
        </div>
    )
}

export default DesafioCar