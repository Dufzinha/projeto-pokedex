// passo 1 - pegar no JD o elemento HTML correspondente ao botão de trocar tema
const botaoAlrarTema = document.getElementById
("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlrarTema.addEventListener("click",() => {
    // passo 6 - remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if(modoEscuroEstaAtivo) {
    //passo 7 - remover a classe do modo escuro do body
    body.classList.remove("modo-escuro")

    // passo 8 - trocar a imagem do botão de alterar tema para o sol
    imagemBotaoTrocarDeTema.setAttribute("src", "/projeto-pokedex/src/imagens/sun1.png")

    } else {
    // passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro")

    // passo 5 - trocar a imagem do botão de alterar tema para lua
    imagemBotaoTrocarDeTema.setAttribute("src", "/projeto-pokedex/src/imagens/moon1.png")
    }
});
