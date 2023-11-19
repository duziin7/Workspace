import React from "react"; 

let estilo = {listStyle: 'none', color: 'pink', fontSize: '50px', textAling: 'center'};

const Pipoca = () => {
    return (
        <>
            <h1>Sexta-Feira depressiva</h1>
            <p>Vão Reprovar</p>
            <ul style={estilo}>     {/* <ul style={{listStyle: "none"}}> */}
                <li>Maria Eduarda</li>
                <li>Anna Clara</li>
                <li>Todos</li>
                <li>Menos eu</li>
            </ul>
        </>
    );
}

export default Pipoca; // Libera para outros arquivos visualizarem