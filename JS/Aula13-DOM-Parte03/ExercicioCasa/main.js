let botao = document.getElementById("B_01");

botao.style.border = 'solid 2px #D9BC66';
botao.style.padding = '.5rem';
botao.style.margin = '.7rem';
botao.style.backgroundColor = '#BFBFBF'


botao.addEventListener("click", () => {
    let imagem = document.createElement("img");
    imagem.src = "img/UA.jpg";
    imagem.alt = "The Umbrella Academy";
    document.body.appendChild(imagem);
});