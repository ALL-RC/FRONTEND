// Mural do Lucas - arquivo de comportamento
// Veja o Guia do Lucas para saber o que fazer em cada passo.

// PASSO 3: pegar o botão pelo id (Guia do Lucas, Passo 3)
const botao = document.getElementById('__D__');
const campoNome = document.getElementById('nome');
const mural = document.getElementById('mural');

// Quando clicar no botão, tudo aqui dentro acontece
botao.addEventListener('click', function () {

  // PASSO 4: ler o que foi escrito (Guia do Lucas, Passo 4)
  const texto = campoNome.__E__;

  // Criar um cartão novo e escrever o texto dentro
  const cartao = document.createElement('p');
  cartao.innerHTML = texto;

  // PASSO 5: colocar o cartão no mural (Guia do Lucas, Passo 5)
  mural.__F__(cartao);

  // Limpar o campo para o próximo
  campoNome.value = '';
});
