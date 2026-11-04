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
- **O que a IA retornou:** após inspecionar as imagens já disponíveis em `public/img/prototipo/`, foi reorganizada a galeria para apresentar as telas de entrada, câmera, biblioteca e fila de revisão com títulos e descrições.
- **O que foi alterado ou rejeitado:** os nomes antigos de arquivos ausentes e as mensagens de espaço reservado foram substituídos pelos seis PNG existentes e textos que descrevem o que aparece em cada tela. A galeria mantém título e descrição acessíveis junto às imagens.
- **Justificativa:** usar os arquivos de protótipo já disponíveis, tornar cada tela identificável e descrever somente o conteúdo visível, sem afirmar que as funções retratadas estão implementadas no protótipo React.

## Solicitação: usar imagens locais nos espaços de imagem

- **O que foi solicitado:** apontar os espaços que exibem imagens para os arquivos da pasta `public/img/prototipo/`.
- **O que a IA retornou:** a galeria e o hero já utilizavam imagens locais; o simulador ainda mostrava apenas um texto de amostra até o envio de uma foto.
- **O que foi alterado ou rejeitado:** o simulador agora inicia com `public/img/prototipo/revisao.png`, e o envio de uma foto continua substituindo essa imagem. O README foi atualizado para descrever esse comportamento.
- **Justificativa:** preencher também a pré-visualização do simulador com um recurso existente no projeto, sem retirar a possibilidade de carregar uma imagem própria.

## Solicitação: corrigir imagem do protótipo que não aparecia

- **O que foi solicitado:** corrigir a tela do protótipo NextCode que não era exibida apesar de o arquivo estar na pasta pública.
- **O que a IA retornou:** o endereço da imagem existe e responde corretamente; o elemento estava com carregamento lazy enquanto permanecia oculto até o evento `onLoad`, impedindo o carregamento no navegador verificado.
- **O que foi alterado ou rejeitado:** removido o carregamento lazy das imagens ocultas do hero e da galeria, e o texto alternativo do hero agora informa carregamento ou falha em vez de pedir que a imagem existente seja adicionada.
- **Justificativa:** as imagens agora carregam sem depender da visibilidade inicial do elemento; o estado de fallback também apresenta uma orientação coerente em caso de falha.

## Solicitação: auditar o projeto e validar as regras de código

- **O que foi solicitado:** verificar os requisitos da Sprint 4, atualizar o README com o deploy React e conferir integralmente as restrições de JavaScript recuperadas.
- **O que a IA retornou:** a auditoria encontrou overflow horizontal no hero a 768 px, descrição antiga da galeria no README e o link de deploy React ausente. As demais estruturas exigidas estão presentes; não há suíte automatizada configurada.
- **O que foi alterado ou rejeitado:** o layout em linha do hero foi movido para o breakpoint `lg`, o README passou a distinguir o deploy React (`https://sprint5-web-front.vercel.app`) do protótipo original (`https://smartystudy.vercel.app`), e a descrição da galeria foi corrigida. O upload do simulador passou a usar URL temporária revogada no cleanup do `useEffect`, sem instanciar `FileReader`.
- **Justificativa:** corrigir a quebra observada em tablet, documentar os dois endereços sem confundi-los e manter o preview de imagens com liberação do recurso temporário.

## Validação

- `npm install react-icons` concluiu; o relatório do npm indicou zero vulnerabilidades.
- `npm run build` concluiu após a migração Tailwind e a inclusão dos ícones React.
- `npm audit` concluiu sem vulnerabilidades reportadas.
- A aplicação local foi visualmente inspecionada com estilos carregados; o servidor de desenvolvimento anterior foi reiniciado após a alteração de dependências para atualizar a otimização do Vite.
- A varredura das fontes não encontrou declarações `function`, `switch`, `throw`, armazenamento local, métodos proibidos de string/array, hooks nativos não permitidos ou estilos React em objetos literais.
- Testes manuais no navegador confirmaram menu mobile e navegação por hash, tabs, accordion, modal da equipe com Escape, validação e feedback do formulário, upload local, demonstração OCR e uso dos ícones; não foram observados erros React/console nesses testes.
- Os seis PNG da galeria foram carregados no navegador; títulos e descrições correspondem às telas de entrada, câmera, biblioteca e fila de revisão. O modal da galeria abriu e fechou com Escape.
- Em verificação anterior da rota protegida, o acesso sem autenticação mostrou a tela de acesso demonstrativo; o login permitido levou à área de estudos e a API Open Library retornou resultados (o primeiro título apresentado foi “Calculus”).
- A responsividade foi medida em 320, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px, além de quatro combinações de orientação retrato/paisagem; nenhuma apresentou rolagem horizontal.
- `git diff --check` concluiu sem apontar erros.
- Não havia suíte de testes automatizados configurada no projeto; as interações acima foram verificadas pelo navegador.
- O deploy na Vercel não foi executado nem confirmado.
- `NextCode-Sprint4.zip` foi gerado e verificado para confirmar a inclusão do código, configuração, README, este registro, roster e imagens do protótipo utilizadas, sem `node_modules`, `.git`, `dist` ou arquivos `.env` reais.
- Após a solicitação para facilitar o acesso, o link da Vercel respondeu HTTP 200, o servidor local `http://localhost:5173/` respondeu HTTP 200 e a página renderizada exibiu o atalho para o protótipo.
- Nesta auditoria, `npm run build`, `npm audit` e `git diff --check` passaram; a auditoria de dependências reportou zero vulnerabilidades. A busca nas fontes não encontrou funções tradicionais, hooks não permitidos, instruções e métodos proibidos, datas, armazenamento local, objetos literais ou construtores de objetos.
- A build de produção foi testada no navegador: login válido e inválido, bloqueio demonstrativo da rota privada, navegação para rota inexistente e atualização, busca Open Library com resultados, abas, FAQ, modais/fechamento por Escape, menu mobile, validação do formulário, upload de imagem e demonstração OCR. As imagens locais carregaram e não foram observados erros de console.
- A responsividade da build local foi medida em 320, 375, 390, 430, 768, 844, 1024, 1280, 1440 e 1920 px, incluindo retrato e paisagem; não houve rolagem horizontal após ajustar o breakpoint do hero.
- Os endereços publicados `https://sprint5-web-front.vercel.app/`, `/acesso`, `/area-estudos` e o PNG do protótipo responderam HTTP 200. A versão publicada apresentou overflow em 768 px antes da correção local; as alterações locais não foram enviadas nem implantadas.
- `npm run` confirmou que não há script de testes automatizados. Lighthouse, auditoria automatizada de acessibilidade e simulação forçada de falha da API não foram executados.
- `NextCode-Sprint4.zip` foi atualizado após a auditoria e conferido para conter as fontes, documentação, roster e imagens, sem `node_modules`, `.git`, `dist` ou arquivos `.env` reais.
