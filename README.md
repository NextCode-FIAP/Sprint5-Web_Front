# NextCode x JOVI

Aplicação acadêmica demonstrativa de câmera inteligente para ajudar estudantes a capturar, organizar e revisar conteúdos de aula. Este projeto evolui a experiência Sprint 3 para React e mantém os textos institucionais e a identidade visual existentes.

## Objetivo

Apresentar a proposta NextCode e reunir uma galeria de protótipo, um simulador visual e uma área de estudos demonstrativa com busca de referências no catálogo público Open Library.

## Tecnologias

- React 19 e React DOM
- JavaScript com módulos ES e JSX
- Vite 7
- Tailwind CSS 4
- React Icons 5 (ícones vetoriais Feather pela coleção `react-icons/fi`)
- Open Library Search API

## Estrutura

```text
public/img/prototipo/      Telas PNG do protótipo JOVI
src/components/            Seções e interações reutilizáveis
src/hooks/                 Navegação, autenticação, modais e busca
src/pages/                 Acesso, espaço de estudos e página não encontrada
src/services/              Requisição à Open Library
src/App.jsx                Composição e rotas da aplicação
src/main.jsx               Inicialização do React
tailwind.css               Entrada do Tailwind CSS, servindo apenas para importação.
```

## Pré-requisitos e instalação

- Node.js 20.19+ ou 22.12+
- npm

```bash
git clone https://github.com/NextCode-FIAP/Sprint5-Web_Front.git
cd Sprint5-Web_Front
npm install
```

## Executar e compilar

```bash
npm run dev
npm run build
npm run preview
```

`npm run dev` inicia o Vite com o plugin oficial do Tailwind. `npm run build` compila as classes utilitárias Tailwind encontradas no JSX junto com a aplicação em `dist/`. `npm run preview` serve a última compilação localmente.

Não há servidor próprio nem variáveis de ambiente obrigatórias. A busca requer conexão à internet e acesso a `https://openlibrary.org/search.json`.

## Rotas e autenticação demonstrativa

- `/`: página institucional e simulador da Sprint 3.
- `/acesso`: formulário de acesso de demonstração.
- `/area-estudos`: busca no catálogo Open Library; exige autenticação durante a navegação.

Credenciais demonstrativas:

- E-mail: `estudante@nextcode.com`
- Senha: `nextcode2026`

A autenticação é mantida apenas em memória durante a sessão da página. É um exemplo didático, sem backend, sem persistência e sem segurança para proteger dados reais.

## Funcionalidades

- Navegação adaptável a dispositivos móveis e menu responsivo.
- Ícones vetoriais consistentes em vez de emojis na interface.
- Abas informativas, accordion de perguntas, cartões da equipe e modais.
- Galeria com seis telas PNG do protótipo, títulos e descrições correspondentes, com visualização ampliada em modal.
- Simulador que inicia com a tela de revisão local do protótipo e permite substituí-la por uma imagem enviada pelo usuário. Filtro, OCR e flashcards são demonstrações visuais; OCR e flashcards não analisam nem processam a imagem.
- Formulário de contato com validação local; não envia mensagens.
- Área protegida demonstrativa e busca de títulos, autores e temas na Open Library, incluindo estados de carregamento, resultados e falhas.

### Imagens do protótipo

As telas do protótipo ficam em `public/img/prototipo/`. A galeria exibe cada imagem com título e descrição de seu conteúdo:

- `inicial.png` — tela de entrada, também usada no hero.
- `camera.png` — câmera e modos de captura.
- `biblioteca.png` e `biblioteca_icon.png` — biblioteca vazia e biblioteca com materiais.
- `revisao.png` e `revisao_vazia.png` — fila de revisão com materiais e vazia.

Se substituir ou adicionar telas, atualize os nomes, títulos e descrições em `src/components/Gallery.jsx`.

## Responsividade e Tailwind

Toda a apresentação e responsividade da aplicação são declaradas com classes utilitárias Tailwind diretamente no JSX. Não há pasta de estilos nem folhas de estilo próprias; `tailwind.css` é apenas a entrada necessária ao plugin do Tailwind. A paleta azul, os textos e a estrutura institucional do projeto original foram preservados.

## Entrega, repositório e deploy

- Repositório: https://github.com/NextCode-FIAP/Sprint5-Web_Front
- Aplicação React publicada na Vercel: [https://sprint5-web-front.vercel.app](https://sprint5-web-front.vercel.app)
- Protótipo NextCode original: [https://smartystudy.vercel.app](https://smartystudy.vercel.app)

O link da aplicação React é o deploy da Sprint 4. O link do protótipo original é mantido como referência da proposta anterior. A configuração `vercel.json` reescreve as rotas para a aplicação React permitir acesso direto e atualização das páginas.

## Uso de IA

A IA foi utilizada para auditar a estrutura e a branch, comparar as funcionalidades com o projeto de referência da Sprint 3 e implementar a migração técnica, rotas demonstrativas, hooks, integração pública, ícones vetoriais e documentação. As telas existentes do protótipo foram aproveitadas na galeria, acompanhadas por títulos e descrições coerentes com seu conteúdo. O arquivo [AI.md](./AI.md) registra o escopo e as decisões; nenhuma implantação, autenticação real ou processamento de OCR foi alegado.
