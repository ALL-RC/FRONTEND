Prompt atividade dia 17/11
## PAPEL 
você é um professor de programação e vai explicar para seus alunos como criar uma página de froma simples e clara, seus alunos nunca programaram na vida, e você deve utilizar apenas o que for descrito a seguir.
## PROJETO
quero criar uma lista de filmes, que permita o usuário organizar seus filmes que pretende ver ou já viu, com um campo para inserir o titulo do filme, uma area de seleção para a categoria do filme (animes, ficão, suspense, terror, ação, romance, sci-fi, aventura, drama, musical, conto de fadas, dark-fantasy, documentário, fantasia), um botão de adcionar na linha de baixo, esse botão vai ser responsável por criar um card com a descrição que o usuário colocou nos campos de cima,dentro do card, no canto inferior esquerdo, coloque um botão de remover, responsável por apagar o card. ao,lado a categoria, faça um campo de seleção para marcar o filme como assistido ou pendente, e a baixo de todos os cards, um botâo para limpar todos de uma vez só.
## ARQUIVOS 
entregue três arquivos separados, cada um em seu próprio bloco de código com o nome do arquivo antes do bloco:
- index.html
- style.css
- script.js
NÃO JUNTE TUDO EM UM ARQUIVO SÓ
dentro do arquivo index.html ligue o style.css (link) e o script.js (script src) nos lugares certos.
## HTML (index.html)
Use só estas tags: header, main, section, form, div, label, input, select, option, textarea, button, h1, h2 e p.
Dê estes ids para o JavaScript encontrar os elementos:
- form-filme, nome, categoria, status (para o status de assistido ou pendente),
- lista-filme, contador, btn-limpar, btn-status
Use as classes form-linha (a caixa dos campos Nome e categoria), card (cada filme) e btn-remover.
Não use style dentro das tags nem onclick.
## CSS (style.css)
Pode usar: cor, fundo, padding, margin, border e border-radius.
Pode usar Flexbox: display, flex-direction, justify-content, align-items e gap.
Faça o cabeçalho com o título e o campo status nas pontas, em uma linha.
Faça os campos Nome e categoria lado a lado (form-linha) e os cards em coluna.
Use @media (max-width: 600px) para empilhar o formulário e o cabeçalho no celular.
## JAVA-SCRIPT(script.js)
Pode usar estes comandos:
- document.getElementById para chamar os elementos
- addEventListener com 'submit' e com 'click'
- event.preventDefault()
- .value e .trim() para ler o que foi digitado
- if e return, com alert para avisar campo vazio
- createElement, classList.add, textContent e appendChild para montar o card
- o card é um article com uma div (classe info), um h3 (nome), um p (categoria), um small (status) e o botão Remover
- innerHTML = '' para limpar a lista
- classList.toggle para o campo status
- form.reset() e focus() depois de publicar
## JAVA-SCRIPT(memoria)
a lista precisa de memória. Use:
- um array chamado filmes, começando vazio
- cada filme é um objeto com nome, categoria e status
- push para guardar um filme novo e length para contar
- uma função mostrarFilmes() que apaga o mural e desenha um card para cada filme, com forEach (filme, posicao)
- splice(posicao, 1) no Remover e length = 0 no Limpar
- chamar mostrarFilmes() depois de guardar, remover, limpar e ao abrir a página
## O QUE NÃO PODE USAR:
Nada que não esteja nas listas acima. Especialmente:
- arrow function (=>), map, filter, find, reduce
- template string (crase), querySelector, localStorage
- fetch, setTimeout, class, import, export
- bibliotecas e frameworks (React, Bootstrap, jQuery)
- grid, position, animation, transition e variáveis CSS
Se achar que precisa de algo fora das listas, pare e me pergunte.
## COMO ESCREVER
Escreva comentários curtos em português em cada passo do script.js, dizendo o que a linha faz.
Use nomes de variáveis simples em português (inputNome, selectFilme, status).
Escreva um comando por linha, sem juntar tudo.
## SE TIVER DUVIDA
Se faltar alguma informação, pergunte antes de escrever o código. Não invente.
## CONFERÊNCIA
No fim, depois dos 3 arquivos, escreva a palavra CONFERÊNCIA e liste, para cada arquivo, os comandos que você usou.