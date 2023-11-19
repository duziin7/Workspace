import React from "react";

function NomeAluno(props){
    return <h1>Calmô, {props.name}, não se vá</h1>  
}

const mensagem = () => {
    return <NomeAluno name= 'Jun lokinho'/>
}

export default mensagem;