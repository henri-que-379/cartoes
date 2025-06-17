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

criaCartao("História", "Quem foi Tiradentes?", "Um dos líderes da Inconfidência Mineira.");
criaCartao("Matemática", "Qual é a raiz quadrada de 81?", "É 9.");
criaCartao("Ciências", "O que é fotossíntese?", "É o processo pelo qual as plantas produzem seu próprio alimento.");
