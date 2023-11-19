import React from "react";
import spiderr from "../img/spidey.jpg";

let estilo = { fontSize: '2rem', color: 'pink', backgroundColor: 'orange' };

const principal = () => {
    return (
        <>
            <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>
            <ul>
                <li>O Espetacular Homem-Aranha 2</li>
                <li>Vingadores: Ultimato</li>
                <li>Capitão América: O Soldado Invernal </li>
                <li>Pantera Negra</li>
                <li>Rua do Medo</li>
            </ul>
            <img src={spiderr} alt="Spider-man" />
        </>
    );
}

export default principal;
