function alertCookie(){
    alert("Você quer um Cookie?")
};

let alertSucesso = () => {
    alert("Mensagem gerada com sucesso")
    console.log("Mensagem gerada com sucesso")
};

const Notbook = { 
    modelo: 'Dell inspiron',
    cor: 'Preto',
    memoria: '1GB',
    processador: 'i3 9100f',
    memoriaRan: '8gb'
}

console.log(Notbook)

function anosParaDias(anos) {
    const dias = anos * 365;
    return dias;
  }
  
  const anos = 5; 
  const resultado = anosParaDias(anos);
  console.log(`${anos} anos equivalem a ${resultado} dias.`);
  