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
public/img/prototipo/      Espaço para adicionar imagens do protótipo
src/components/            Seções e interações reutilizáveis
src/hooks/                 Navegação, autenticação, modais e busca
src/pages/                 Acesso, espaço de estudos e página não encontrada
src/services/              Requisição à Open Library
src/App.jsx                Composição e rotas da aplicação
src/main.jsx               Inicialização do React
tailwind.css               Entrada do Tailwind CSS
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
- Galeria com cartões que apresentam o título e a descrição de cada tela enquanto as imagens não são adicionadas; os arquivos inseridos depois são exibidos automaticamente.
- Simulador que pré-visualiza uma imagem local e demonstra visualmente filtro, OCR e flashcards. OCR e flashcards não analisam nem processam a imagem.
- Formulário de contato com validação local; não envia mensagens.
- Área protegida demonstrativa e busca de títulos, autores e temas na Open Library, incluindo estados de carregamento, resultados e falhas.

### Adicionar as imagens do protótipo

Copie os arquivos originais para `public/img/prototipo/`. A galeria usa estes nomes:

- `Cadastro.jpg`
- `Inicio-lousa.jpg`
- `inicio-IA.jpg`
- `Layout-Camera.jpg`
- `Pasta_Aberta.jpg`
- `Pasta_fechada.jpg`

Para a imagem do hero, adicione também `inicial.png`. A galeria apresenta o título e uma descrição do conteúdo de cada tela até que o respectivo arquivo esteja disponível.

## Responsividade e Tailwind

Toda a apresentação e responsividade da aplicação são declaradas com classes utilitárias Tailwind diretamente no JSX. Não há pasta de estilos nem folhas de estilo próprias; `tailwind.css` é apenas a entrada necessária ao plugin do Tailwind. A paleta azul, os textos e a estrutura institucional do projeto original foram preservados.

## Entrega, repositório e deploy

- Repositório: https://github.com/NextCode-FIAP/Sprint5-Web_Front
- Protótipo NextCode publicado na Vercel: https://smartystudy.vercel.app

O link publicado também está disponível nos botões da página inicial e do rodapé. Ele abre o protótipo hospedado na Vercel; o código React deste repositório é a aplicação da Sprint 4 e não foi publicado automaticamente neste deploy. A configuração `vercel.json` prepara as rotas da aplicação React para acesso direto e atualização quando ela for implantada.

## Uso de IA

A IA foi utilizada para auditar a estrutura e a branch, comparar as funcionalidades com o projeto de referência da Sprint 3 e implementar a migração técnica, rotas demonstrativas, hooks, integração pública, ícones vetoriais e documentação. As imagens foram deixadas de fora por solicitação do usuário; os cartões da galeria exibem títulos e descrições baseados nas legendas existentes até que os arquivos sejam adicionados. O arquivo [AI.md](./AI.md) registra o escopo e as decisões; nenhuma implantação, autenticação real ou processamento de OCR foi alegado.
