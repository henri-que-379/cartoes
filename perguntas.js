function criaCartao(categoria, pergunta, resposta) {
  const container = document.getElementById("container");

  const cartao = document.createElement("article");
  cartao.classList.add("cartao");

  const elCategoria = document.createElement("div");
  elCategoria.classList.add("categoria");
  elCategoria.textContent = categoria;

  const elPergunta = document.createElement("div");
  elPergunta.classList.add("pergunta");
  elPergunta.textContent = pergunta;

  const elResposta = document.createElement("div");
  elResposta.classList.add("resposta");
  elResposta.textContent = resposta;

  cartao.appendChild(elCategoria);
  cartao.appendChild(elPergunta);
  cartao.appendChild(elResposta);

  container.appendChild(cartao);
}

criaCartao("Programação", "O que é JavaScript?", "JavaScript é uma linguagem de programação.");
criaCartao("Matemática", "Quanto é 7 x 8?", "7 x 8 = 56.");
criaCartao("Geografia", "Qual a capital da França?", "A capital da França é Paris.");
