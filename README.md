# Jogo da Velha: Gato vs Coelho

Um jogo da velha kawaii com tema de gato versus coelho, construído com HTML, CSS e JavaScript. Totalmente responsivo para funcionar em desktops, tablets e dispositivos móveis.

## Como executar o projeto

Para executar o projeto corretamente e garantir que as imagens sejam carregadas:

1. Abra o projeto no Visual Studio Code
2. Instale a extensão "Live Server" (caso ainda não tenha instalado)
3. Clique com o botão direito no arquivo `index.html`
4. Selecione a opção "Open with Live Server"
5. O jogo será aberto em seu navegador padrão com todas as imagens funcionando corretamente

## Estrutura do projeto

- `index.html`: Arquivo principal do jogo
- `css/style.css`: Estilos e temas do jogo
- `css/responsive.css`: Estilos específicos para responsividade
- `js/script.js`: Lógica do jogo
- `images/`: Pasta contendo as imagens do jogo
  - `cat.gif`: GIF animado do gato
  - `rabbit.gif`: GIF animado do coelho
  - `favicon.svg`: Ícone do jogo para a guia do navegador
- `fallback_solution.html`: Versão alternativa com SVGs animados

## Características

- Design kawaii e colorido
- Totalmente responsivo para funcionar em qualquer dispositivo
- Suporte para toques em dispositivos móveis
- Visualização otimizada em modos retrato e paisagem
- Animações e efeitos visuais para uma experiência divertida
- Sistema de pontuação persistente (usando localStorage)
- Modo de jogo contra o computador com IA básica
- Efeitos de confetti e estrelas na tela de vitória

## Compatibilidade

O jogo funciona bem em:
- Dispositivos móveis (Android e iOS)
- Tablets
- Desktops e notebooks com diferentes tamanhos de tela

## Observações

- As imagens são melhor servidas através de um servidor web (como o Live Server)
- Use Shift+R como atalho para zerar o placar (apenas em desktops)
- Em dispositivos móveis, o jogo está otimizado para toques e orientações diferentes da tela
