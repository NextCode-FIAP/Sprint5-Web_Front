# Registro de uso de IA

## Solicitação: auditoria e evolução do NextCode para a Sprint 4

- **O que foi solicitado:** auditar o projeto Sprint 3 no branch `feature/base`, evoluir a aplicação React existente e cumprir os requisitos do briefing, incluindo Tailwind, navegação, área privada demonstrativa, API, preservação das interações, documentação e ZIP de entrega.
- **O que a IA retornou:** inspeção do branch, arquivos, componentes, build e conteúdo do projeto Sprint 3 de referência; identificação de que a entrada do Vite e os estilos referenciados não estavam no local correto e de que os assets do protótipo não estavam no checkout.
- **O que foi alterado ou rejeitado:** foi mantido o branch existente `feature/base`; os arquivos CSS da Sprint 3 foram inicialmente restaurados para compreender e validar o design, depois substituídos por utilitários Tailwind no JSX e removidos; as imagens baixadas durante a preparação foram removidas após o usuário esclarecer que ainda não queria incluí-las; a aplicação mantém espaços reservados com nomes de arquivo e instruções para inserção posterior.
- **Justificativa:** manter o trabalho no branch definido, preservar a paleta e hierarquia da interface original sem colocar as imagens no pacote e cumprir a exigência final de não ter pasta de estilos nem CSS de apresentação separado.

## Solicitação: converter todo o CSS de apresentação para Tailwind

- **O que foi solicitado:** retirar a pasta `styles` e declarar os estilos junto ao JSX usando Tailwind.
- **O que a IA retornou:** auditoria dos quatro arquivos CSS, dos componentes e das páginas; identificação de mais de 1.500 linhas de estilos próprios em conflito com o requisito.
- **O que foi alterado ou rejeitado:** estilos de layout, tipografia, cores, formulários, modais e breakpoints foram migrados para classes utilitárias Tailwind; a pasta `src/styles/` foi removida; o build passou a usar o plugin Vite oficial. `tailwind.css` na raiz contém somente a diretiva de entrada do compilador Tailwind, não regras visuais próprias.
- **Justificativa:** deixar o estilo legível e verificável diretamente nos componentes, cumprir a instrução de HTML/JSX e Tailwind juntos e evitar CSS próprio fora do formato pedido.

## Decisões de implementação

- **Pedido:** facilitar o acesso ao projeto e adicionar o link do deploy Vercel do protótipo.
- **Retorno e alteração:** foi verificado que `https://smartystudy.vercel.app/` responde com HTTP 200 e apresenta o protótipo JOVI; o endereço foi adicionado como chamada principal secundária na página inicial, no rodapé e no README. O servidor local React também foi iniciado em `http://localhost:5173/`.
- **Justificativa:** o endereço é o protótipo já publicado, não o deploy da aplicação React desta branch. Os rótulos e a documentação distinguem explicitamente os dois.

- **Pedido:** usar somente os hooks nativos `useState` e `useEffect` e funções arrow, preservando as restrições de JavaScript do briefing.
- **Retorno e alteração:** foram planejados hooks customizados de navegação, autenticação, modal e busca; a navegação usa History API e a autenticação de demonstração fica apenas em memória.
- **Justificativa:** atender à navegação pública/privada sem bibliotecas de roteamento ou armazenamento persistente e deixar explícito que a proteção não é segurança real.

- **Pedido:** integrar uma API relacionada a estudos com estados de carregamento, falha e resultados.
- **Retorno e alteração:** foi escolhida a busca pública Open Library, com resultados apresentados como registros do catálogo, sem classificá-los como recomendações acadêmicas verificadas.
- **Justificativa:** demonstrar consumo de API sem inventar um backend nem alegar que os recursos de câmera/IA estão implementados.

- **Pedido:** manter a galeria original sem adicionar imagens agora.
- **Retorno e alteração:** os espaços reservados indicam o nome e o caminho de cada imagem esperada; o conteúdo não afirma que OCR, flashcards ou envio do formulário operam serviços reais.
- **Justificativa:** permitir incluir os materiais originais posteriormente sem substituir ou ocultar as demais seções do site.

## Solicitação: substituir emojis por ícones profissionais

- **O que foi solicitado:** remover emojis da interface e usar ícones profissionais instalados por `npm install react-icons`.
- **O que a IA retornou:** inclusão de React Icons e uso de ícones vetoriais Feather para marca, menu, abas, cartões da solução, simulador, equipe, galeria e rodapé.
- **O que foi alterado ou rejeitado:** emojis e símbolos textuais de menu/fechamento foram substituídos por componentes de `react-icons/fi`; a dependência foi adicionada ao `package.json` e ao lockfile; README atualizado.
- **Justificativa:** manter consistência visual, permitir controle de cor e tamanho pelas classes Tailwind e preservar nomes acessíveis nos controles.

## Solicitação: usar títulos e descrições nos espaços da galeria

- **O que foi solicitado:** substituir os espaços vazios das imagens por seus títulos e ajustar os textos para corresponder ao conteúdo de cada tela.
- **O que a IA retornou:** cartões da galeria com títulos e descrições legíveis para cadastro, captura de lousa, ajustes de imagem, modos da câmera, organização em pastas e processamento/salvamento.
- **O que foi alterado ou rejeitado:** os avisos com nomes de arquivos e “espaço reservado” foram removidos; cada cartão mostra um ícone vetorial, título e descrição com base nos nomes e legendas já existentes. Ao adicionar o arquivo correspondente, a imagem continua sendo exibida com sua legenda.
- **Justificativa:** manter a galeria útil sem incluir imagens ainda ausentes e sem afirmar que as funções retratadas estão implementadas no protótipo React.

## Validação

- `npm install react-icons` concluiu; o relatório do npm indicou zero vulnerabilidades.
- `npm run build` concluiu após a migração Tailwind e a inclusão dos ícones React.
- `npm audit` concluiu sem vulnerabilidades reportadas.
- A aplicação local foi visualmente inspecionada com estilos carregados; o servidor de desenvolvimento anterior foi reiniciado após a alteração de dependências para atualizar a otimização do Vite.
- A varredura das fontes não encontrou declarações `function`, `switch`, `throw`, armazenamento local, métodos proibidos de string/array, hooks nativos não permitidos ou estilos React em objetos literais.
- Testes manuais no navegador confirmaram menu mobile e navegação por hash, tabs, accordion, modal da equipe com Escape, validação e feedback do formulário, upload local, demonstração OCR e uso dos ícones; não foram observados erros React/console nesses testes.
- A galeria foi verificada sem os arquivos de imagem: os seis cartões mostram títulos e descrições e os botões permanecem inativos até as imagens correspondentes serem carregadas.
- Em verificação anterior da rota protegida, o acesso sem autenticação mostrou a tela de acesso demonstrativo; o login permitido levou à área de estudos e a API Open Library retornou resultados (o primeiro título apresentado foi “Calculus”).
- A responsividade foi medida em 320, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px, além de quatro combinações de orientação retrato/paisagem; nenhuma apresentou rolagem horizontal.
- A abertura do modal da galeria não pôde ser exercitada sem os arquivos de imagem, que continuam fora do projeto por solicitação.
- `git diff --check` concluiu sem apontar erros.
- Não havia suíte de testes automatizados configurada no projeto; as interações acima foram verificadas pelo navegador.
- O deploy na Vercel não foi executado nem confirmado.
- `NextCode-Sprint4.zip` foi gerado e verificado para confirmar a inclusão do código, configuração, README, este registro e o roster, sem `node_modules`, `.git`, `dist`, arquivos `.env` reais ou imagens.
- Após a solicitação para facilitar o acesso, o link da Vercel respondeu HTTP 200, o servidor local `http://localhost:5173/` respondeu HTTP 200 e a página renderizada exibiu o atalho para o protótipo.
