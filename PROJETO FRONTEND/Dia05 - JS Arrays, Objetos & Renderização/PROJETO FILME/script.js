/* =====================================================================
   MINI CÓDIGO · Minha Lista de Filmes
   O index.html e o style.css já estão prontos. Quem completa é você!
   Ajuda: abra o "Mural Passo a Passo" em outra aba. Tudo o que você
   precisa está lá (cada passo diz em que aba e passo olhar).

   COMO FUNCIONA NO FINAL:
   - Você digita o título, escolhe o tipo e clica em Adicionar.
   - Um card aparece na lista e o número "Total" sobe.
   - Cada card tem um botão Remover.
   - O botão "Limpar lista" apaga tudo.
   - Campo vazio mostra um aviso e não adiciona nada.

   DICA: faça um passo, salve, abra o index.html e teste. Só depois
   passe para o próximo. Se der erro, aperte F12 e olhe o Console.
   ===================================================================== */


/* ---------------------------------------------------------------------
   PASSO 1 · Chamar os elementos da página (Dia 04)
   Onde olhar: Mural Passo a Passo, aba 2, passo 1.
   Crie uma variável (const) para cada elemento e guarde nela o que o
   getElementById encontrar. Os ids estão no index.html:
     form-filme | titulo | tipo | lista | contador | btn-limpar
   Nomes sugeridos: form, inputTitulo, selectTipo, lista, contador, btnLimpar
   --------------------------------------------------------------------- */

// escreva aqui



/* ---------------------------------------------------------------------
   PASSO 2 · Criar a memória (Dia 05)
   Onde olhar: Mural Passo a Passo, aba 3, passo 1.
   Crie um array vazio chamado filmes. É a lista onde o app vai guardar
   cada filme.
   --------------------------------------------------------------------- */

// escreva aqui



/* ---------------------------------------------------------------------
   PASSO 3 · A função que desenha a lista (Dia 05)
   Onde olhar: Mural Passo a Passo, aba 3, passos 3, 4 e 7.
   Crie a função mostrarFilmes. Dentro dela, nesta ordem:
     a) apague tudo o que está na lista (innerHTML vazio);
     b) percorra o array com forEach. A cada filme (ficha) e posicao:
          - crie um article e dê a ele as classes 'card' e
            'tipo-' + filme.tipo  (ex.: tipo-anime);
          - crie uma div com a classe 'info';
          - crie um h3 com o título (filme.titulo) e um small com
            'Tipo: ' + filme.tipo;
          - encaixe o h3 e o small na div, e a div no card;
          - crie o botão Remover (type 'button', texto 'Remover',
            classe 'btn-remover');
          - no clique do botão: tire a ficha do array com splice
            (usando a posicao) e chame mostrarFilmes() de novo;
          - encaixe o botão no card e o card na lista;
     c) depois do forEach, escreva no contador quantas fichas tem o array.
   Os cards ficam bonitos sozinhos: o style.css já tem tudo pronto.
   --------------------------------------------------------------------- */

// escreva aqui



/* ---------------------------------------------------------------------
   PASSO 4 · O envio do formulário (Dia 04 + Dia 05)
   Onde olhar: Mural Passo a Passo, aba 2, passos 2, 3, 4 e 8
               e aba 3, passos 2 e 6.
   Escute o evento 'submit' do formulário. Dentro da função:
     a) impeça a página de recarregar (preventDefault);
     b) leia o título digitado (sem espaços sobrando) e o tipo escolhido;
     c) se o título estiver vazio: mostre um alert e pare a função (return);
     d) guarde uma ficha no array com push. A ficha tem duas informações:
        titulo e tipo;
     e) chame mostrarFilmes() para desenhar a lista;
     f) limpe o formulário e coloque o cursor de volta no campo do título.
   --------------------------------------------------------------------- */

// escreva aqui



/* ---------------------------------------------------------------------
   PASSO 5 · O botão Limpar lista (Dia 04 + Dia 05)
   Onde olhar: Mural Passo a Passo, aba 3, passo 8.
   Escute o clique do botão. Dentro: esvazie o array (diga que o tamanho
   dele é 0) e chame mostrarFilmes().
   --------------------------------------------------------------------- */

// escreva aqui



/* ---------------------------------------------------------------------
   PASSO 6 · Desenhar ao abrir a página (Dia 05)
   Onde olhar: Mural Passo a Passo, aba 3, passo 9.
   Chame mostrarFilmes() uma vez aqui no final, para a lista e o
   contador já nascerem do array.
   --------------------------------------------------------------------- */

// escreva aqui
