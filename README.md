<div style="text-align: center; margin-bottom: 20px;">
  <img src="./images/favicon.svg" width="80px" alt="Ícone do Jogo da Velha">
  <h1>Jogo da Velha: Gato vs Coelho</h1>
  <img src="./images/cat.gif" width="80px" alt="Gato">
  <span style="margin: 0 20px; font-size: 24px;">VS</span>
  <img src="./images/rabbit.gif" width="80px" alt="Coelho">
 

## 🛠️ Estrutura do Projeto

O projeto está organizado em uma estrutura clara e modular:

```
jogo-da-velha/
│
├── index.html              # Arquivo principal do jogo
├── fallback_solution.html  # Versão alternativa com SVGs
│
├── css/
│   ├── style.css           # Estilos principais e temas kawaii
│   └── responsive.css      # Estilos específicos para responsividade
│
├── js/
│   └── script.js           # Lógica do jogo e interatividade
│
├── images/
│   ├── cat.gif             # GIF animado do gato
│   ├── rabbit.gif          # GIF animado do coelho
│   └── favicon.svg         # Ícone da guia do navegador
│
└── README.md               # Documentação do projeto
```./images/cat.gif" width="80px" alt="Gato">
  <span style="margin: 0 20px; font-size: 24px;">VS</span>
  <img src="./images/rabbit.gif" width="80px" alt="Coelho">
</div>

## 📌 Sobre o Projeto

Um jogo da velha kawaii (fofo) com tema de gato versus coelho! 
Desfrute de um design colorido, animações divertidas e efeitos visuais encantadores.

Este projeto foi desenvolvido usando HTML5, CSS3 e JavaScript puro, com foco em:
- Design visual atraente e temático
- Experiência de usuário agradável
- Responsividade completa para todas as telas
- Animações e efeitos visuais interativos

## 🚀 Como Jogar

É simples! Você controla o gato 🐱 e joga contra o coelho 🐰 (controlado pelo computador).
Clique em qualquer célula vazia para fazer sua jogada. O primeiro a completar uma linha, 
coluna ou diagonal com seu símbolo vence!

### Recursos do jogo:
- Sistema de pontuação persistente (armazenado localmente)
- Efeitos visuais ao vencer (confetti e estrelas)
- Interface amigável e intuitiva
- Design responsivo para dispositivos móveis e desktop

## 💻 Como Executar o Projeto

Para uma experiência ideal com todas as imagens e recursos funcionando corretamente:

### Método Recomendado (usando Live Server):

1. Abra o projeto no Visual Studio Code
2. Instale a extensão "Live Server" (se ainda não estiver instalada)
   - Clique na guia de extensões (ou pressione `Ctrl+Shift+X`)
   - Pesquise por "Live Server"
   - Clique em "Instalar" na extensão desenvolvida por Ritwick Dey
3. Clique com o botão direito no arquivo `index.html`
4. Selecione a opção "Open with Live Server"
5. O jogo será aberto automaticamente em seu navegador padrão

### Método Alternativo:

Se você não quiser usar o Live Server, também pode abrir o arquivo `fallback_solution.html` 
diretamente no navegador. Esta versão usa SVGs animados em vez de GIFs, permitindo o 
funcionamento sem um servidor web.

## 🎮 Controles e Atalhos

- **Mouse/Touch**: Clique ou toque nas células para fazer suas jogadas
- **Teclado (Desktop)**: Pressione `Shift+R` para zerar o placar
- **Botões**: 
  - "Reiniciar" - Começa um novo jogo mantendo o placar
  - "Zerar Placar" - Redefine a pontuação de ambos os jogadores para zero
  - "Jogar Novamente" - Após o fim de um jogo, inicia uma nova partida

## 🛠️ Estrutura do Projeto

- `index.html`: Arquivo principal do jogo
- `css/style.css`: Estilos e temas do jogo
- `css/responsive.css`: Estilos específicos para responsividade
- `js/script.js`: Lógica do jogo
- `images/`: Pasta contendo as imagens do jogo
  - `cat.gif`: GIF animado do gato
  - `rabbit.gif`: GIF animado do coelho
  - `favicon.svg`: Ícone do jogo para a guia do navegador
- `fallback_solution.html`: Versão alternativa com SVGs animados

## ✨ Características e Funcionalidades

### Design e Experiência
- **🎨 Estilo Kawaii**: Design fofo e colorido inspirado na estética japonesa
- **🌈 Elementos Visuais**: Cores pastéis, bordas pixeladas e animações suaves
- **🎭 Personagens**: Gato e coelho animados como jogadores
- **✨ Efeitos Especiais**: Confetti e estrelas cintilantes na tela de vitória

### Funcionalidades Técnicas
- **📱 Responsividade Total**: Adapta-se perfeitamente a qualquer tamanho de tela
- **👆 Suporte Multi-Touch**: Otimizado para dispositivos com tela sensível ao toque
- **🔄 Modos de Orientação**: Visualização otimizada em modo retrato e paisagem
- **💾 Armazenamento Local**: Sistema de pontuação persistente usando localStorage
- **🤖 IA do Jogo**: Algoritmo básico para as jogadas do computador

## 🖥️ Compatibilidade

O jogo foi testado e é compatível com:

| Dispositivo | Navegadores | Orientação |
|-------------|-------------|------------|
| 📱 Smartphones | Chrome, Safari, Firefox | Retrato e Paisagem |
| 📱 Tablets | Chrome, Safari, Firefox, Edge | Retrato e Paisagem |
| 💻 Desktops/Notebooks | Chrome, Firefox, Safari, Edge | - |

## 🔍 Acessibilidade
- Cores com bom contraste para melhor legibilidade
- Elementos de tamanho adequado para interação
- Feedback visual claro para ações do usuário

## 📝 Notas e Observações

- **🌐 Servidor Web**: As imagens GIF funcionam melhor quando servidas por um servidor web como o Live Server
- **⌨️ Atalhos**: Use `Shift+R` como atalho para zerar o placar (apenas em desktops)
- **📊 Dados Salvos**: O placar é armazenado localmente no seu navegador
- **🔒 Privacidade**: Nenhum dado é enviado para servidores externos

## 🚧 Possíveis Melhorias Futuras

- [ ] Modo multijogador local (dois jogadores humanos)
- [ ] Diferentes níveis de dificuldade para a IA
- [ ] Opções de personalização (temas de cores alternativos)
- [ ] Som e efeitos sonoros (opcional)
- [ ] Estatísticas de jogo mais detalhadas

## 📜 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se livre para usar, modificar e distribuir conforme as regras da licença.

## 👨‍💻 Autor

Desenvolvido com 💖 e criatividade.
