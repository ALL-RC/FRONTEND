//passou no teste de adcionar, limpar e remover, o destaque funciona, mas não sei se é o correto, pois não foi pedido para fazer isso, mas achei interessante.
// Chama os elementos da página pelo id
const formFilme = document.getElementById('form-filme');
const inputNome = document.getElementById('nome');
const selectCategoria = document.getElementById('categoria');
const selectStatus = document.getElementById('status');
const listaFilme = document.getElementById('lista-filme');
const contador = document.getElementById('contador');
const btnLimpar = document.getElementById('btn-limpar');
const btnStatus = document.getElementById('btn-status');

// Memória da lista: array que começa vazio
const filmes = [];

// Função que apaga a lista e desenha um card para cada filme
function mostrarFilmes() {
    // Limpa a lista na tela
    listaFilme.innerHTML = '';

    // Passa por cada filme guardado no array
    filmes.forEach(function (filme, posicao) {
        // Cria o card
        const card = document.createElement('article');
        // Coloca a classe card
        card.classList.add('card');

        // Se o filme foi assistido, adiciona a classe assistido
        if (filme.status === 'assistido') {
            card.classList.add('assistido');
        }

        // Cria a div que guarda as informações
        const info = document.createElement('div');
        info.classList.add('info');

        // Cria o título com o nome do filme
        const titulo = document.createElement('h3');
        titulo.textContent = filme.nome;

        // Cria o parágrafo com a categoria
        const textoCategoria = document.createElement('p');
        textoCategoria.textContent = filme.categoria;

        // Cria o texto pequeno com o status
        const textoStatus = document.createElement('small');
        textoStatus.textContent = filme.status;

        // Cria o botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.classList.add('btn-remover');
        btnRemover.textContent = 'Remover';

        // Quando clicar em remover, apaga o filme desta posição
        btnRemover.addEventListener('click', function () {
            // Tira 1 filme do array na posição do card
            filmes.splice(posicao, 1);
            // Desenha a lista de novo
            mostrarFilmes();
        });

        // Coloca título, categoria e status dentro da div info
        info.appendChild(titulo);
        info.appendChild(textoCategoria);
        info.appendChild(textoStatus);

        // Coloca a div info e o botão dentro do card
        card.appendChild(info);
        card.appendChild(btnRemover);

        // Coloca o card na lista
        listaFilme.appendChild(card);
    });

    // Mostra quantos filmes existem usando length
    contador.textContent = 'Filmes na lista: ' + filmes.length;
}

// Quando o formulário for enviado
formFilme.addEventListener('submit', function (event) {
    // Impede a página de recarregar
    event.preventDefault();

    // Lê o nome digitado e tira os espaços das pontas
    const nome = inputNome.value.trim();
    // Lê a categoria escolhida
    const categoria = selectCategoria.value;
    // Lê o status escolhido
    const status = selectStatus.value;

    // Se o nome estiver vazio, avisa e para
    if (nome === '') {
        alert('Digite o nome do filme!');
        return;
    }

    // Se a categoria estiver vazia, avisa e para
    if (categoria === '') {
        alert('Escolha uma categoria!');
        return;
    }

    // Cria o objeto do filme com nome, categoria e status
    const filme = {
        nome: nome,
        categoria: categoria,
        status: status
    };

    // Guarda o filme no array
    filmes.push(filme);

    // Desenha a lista de novo
    mostrarFilmes();

    // Limpa os campos do formulário
    formFilme.reset();

    // Coloca o cursor de volta no campo nome
    inputNome.focus();
});

// Quando clicar em limpar todos
btnLimpar.addEventListener('click', function () {
    // Esvazia o array
    filmes.length = 0;
    // Desenha a lista de novo
    mostrarFilmes();
});

// Quando clicar no botão do cabeçalho, liga ou desliga o destaque
btnStatus.addEventListener('click', function () {
    listaFilme.classList.toggle('destaque');
});

// Desenha a lista ao abrir a página
mostrarFilmes();