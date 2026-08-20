# 📚 PassaAdiante - Site Oficial

> *Seu material ainda tem muito para ensinar. Um caderno a menos parado, um estudante a mais preparado.*

Site oficial do **PassaAdiante**, desenvolvido na disciplina de **Desenvolvimento para Web** (UFCA).

O PassaAdiante é um aplicativo de doação de materiais escolares que conecta
doadores a estudantes que precisam de recursos educacionais.

## 👥 Equipe Anteiku - Polo Caucaia

| Nome | GitHub |
|------|--------|
| Holivane Holanda | @holivane |
| Rodrigo Bezerra | @orodrigobezerra |
| Sara Ferreira | @saraferreira10 |

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript
- jQuery

## 📁 Estrutura do Projeto

```
passaadiante-site/
├── css/
│   └── style.css
├── img/
├── js/
│   └── script.js
├── paginas/
│   ├── catalogo.html
│   ├── como-participar.html
│   ├── contato.html
│   └── sobre-o-projeto.html
└── index.html
```

## 🚀 Entregas

### Etapa 1 — Estrutura inicial do projeto (PF1)

Estrutura básica do site em HTML, com organização de pastas e navegação entre as páginas:

- `index.html` com `header`, `nav`, `main`, `section` e `footer`;
- Páginas internas criadas: `sobre-o-projeto.html`, `catalogo.html`, `como-participar.html` e `contato.html`;
- Menu de navegação conectando todas as páginas;
- Arquivos organizados em `css/`, `js/`, `img/` e `paginas/`;
- `style.css` e `script.js` criados (ainda vazios, conforme previsto para esta etapa).

### Etapa 2 — Responsividade (PF2)

Adaptação do projeto para diferentes tamanhos de tela, com layout flexível e media queries:

- Meta tag viewport validada em todas as páginas;
- Layout base em flexbox/grid para o cabeçalho, o menu de navegação, as seções de conteúdo e os cards do catálogo;
- Imagens responsivas (`max-width: 100%`, `height: auto`) em todas as páginas;
- Menu de navegação adaptado para um menu mobile (hambúrguer) em telas pequenas;
- Media queries em 1024px, 768px e 480px, ajustando seções, cards do catálogo e o formulário de filtros do catálogo;
- Projeto testado em diferentes larguras de tela, sem rolagem horizontal indesejada;
- Formulário de contato entregue como placeholder ("Em breve"), com os campos já rascunhados em comentário no HTML, para serem ativados na etapa seguinte;
- Formulário de filtros do catálogo ainda estático nesta etapa (sem JavaScript), com a filtragem funcional prevista para a etapa seguinte.

### Etapa 3 — Formulário, JavaScript e revisão final (PF3)

Implementação da interatividade do site com JavaScript e jQuery, além da revisão geral do projeto:

- Formulário de contato funcional (`paginas/contato.html`), com validação via jQuery: campos obrigatórios, formato de e-mail e mensagens de sucesso/erro exibidas ao usuário;
- Filtro do catálogo funcional por categoria e estado de conservação, com mensagem de "nenhum resultado encontrado" quando nenhum card corresponde ao filtro escolhido;
- Menu de opções customizado (dropdown) para os campos de filtro do catálogo, sincronizado com os `<select>` originais;
- Menu mobile interativo (abrir/fechar via clique, incluindo clique fora do menu);
- Revisão geral de estrutura, CSS (cores, fontes, espaçamentos, nomenclatura de classes) e responsividade em todas as páginas.

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos - UFCA, 2026.
