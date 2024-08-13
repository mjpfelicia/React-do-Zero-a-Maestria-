import React, { useState } from 'react'
import "./MyComponent.css"

const MyComponent = () => {
    const n = 15;
    const [name] = useState("Sandra");
    const redTitle = false;

    return (
        < div className='box_css'>

            {/*css global*/}
            <h2>Css de componente</h2>
            <p className='paragrafo_global'>Este é o parágrafo do componente estilo global</p>

            {/* css do componente */}
            <p className='paragrafo_component'>Este elemento foi estilizado usando a className no css do componente</p>

            {/* css inline */}
            <p style={{ color: "white", padding: "12px", backgroundColor: "black", borderTop: "10px solid red" }}>Este elemento foi estilizado de foma inline</p>

            {/* css dinâmico */}
            <h3 style={n < 10 ? { color: "purple" } : { color: "pink" }}> css dinâmico</h3>
            <h3 style={n > 10 ? { color: "purple" } : { color: "pink" }}> css dinâmico</h3>
            <h3 style={name === "Sandra" ? { color: "white", backgroundColor: "#000" } : null}> Css teste nome</h3>

            {/* Classe dimálica */}
            <h3 className={redTitle ? "red_title" : "title"}>Este titulo vai ter classe dinâmica</h3>



        </div >
    )
}

export default MyComponent;