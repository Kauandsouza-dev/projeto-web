/* =========================
   COLA DE CSS - ANOTAÇÕES
   ========================= */

/* Faz o padding e a borda entrarem no cálculo da largura e altura.
   Sem isso alguns elementos ficam maiores do que deveriam. */
box-sizing: border-box;


/* Permite posicionar elementos absolutos usando esta div como referência.
   Muito usado quando quero colocar ícones, tags ou elementos dentro de uma caixa específica. */
position: relative;


/* Retira o elemento do fluxo normal da página.
   Permite posicionar exatamente onde eu quiser usando top, left, right e bottom. */
position: absolute;


/* Mantém o elemento sempre visível na tela.
   Muito usado para menus inferiores e cabeçalhos fixos. */
position: fixed;


/* Faz a div ocupar pelo menos toda a altura da tela.
   Mesmo com pouco conteúdo o fundo continua preenchendo tudo. */

min-height: 100vh; para height
min-width: 100vw; para windth

/* Define uma largura máxima.
   Limita a largura máxima para manter aparência de aplicativo mobile */
max-width: 390px;


/* Ativa o Flexbox.
   Permite alinhar e organizar elementos de forma muito mais fácil. */
display: flex;


/* Faz os elementos ficarem organizados em coluna (um embaixo do outro). */
flex-direction: column;


/* Faz cada elemento ocupar uma parte igual do espaço disponível.
   Muito usado em menus e barras de navegação. */
flex: 1;


/* Alinha os elementos no eixo principal do Flexbox.
   Com flex-direction: row → horizontal.
   Com flex-direction: column → vertical. */
justify-content: center;


/* Alinha os elementos no eixo secundário do Flexbox.
   Geralmente usado para centralizar perfeitamente. */
align-items: center;


/* Cria um Grid.
   Excelente para categorias, cards e layouts organizados. */
display: grid;


/* Cria 4 colunas do mesmo tamanho.
   repeat(4, 1fr) = 4 colunas ocupando espaços iguais. */
grid-template-columns: repeat(4, 1fr);


/* Permite rolagem horizontal quando o conteúdo ultrapassa a largura da tela.
   Foi isso que fez os cards dos destaques rolarem para o lado. */
overflow-x: auto;


/* Faz a imagem preencher todo o espaço disponível sem deformar.
   Se precisar cortar um pedaço da imagem, ela corta. */
object-fit: cover;


/* Empurra o elemento para o final do espaço disponível dentro de um Flexbox.
   Muito útil para alinhar preços e botões no final do card. */
margin-top: auto;


/* Espaço entre elementos do Flexbox ou Grid.
   Melhor do que ficar usando margin em tudo. */
gap: 10px;


/* Arredonda os cantos do elemento. */
border-radius: 20px;


/* Faz o elemento ocupar toda a largura disponível do pai. */
width: 100%;


/* Faz o elemento ocupar toda a altura disponível do pai. */
height: 100%;


/* Remove a borda padrão dos inputs e botões. */
border: none;


/* Remove aquela borda azul que aparece ao clicar em inputs. */
outline: none;


/* Mostra o cursor de mãozinha ao passar o mouse. */
cursor: pointer;


/* Esconde qualquer conteúdo que ultrapasse o tamanho da caixa.
   Muito usado em cards com imagens. */
overflow: hidden;


/* Cria um espaço interno.
   Distância entre o conteúdo e a borda. */
padding: 10px;


/* Cria um espaço externo.
   Distância entre o elemento e outros elementos. */
margin: 10px;