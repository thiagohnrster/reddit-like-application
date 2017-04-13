# Teste Frontend Leroy Merlin Brazil

## Escopo do Teste
O desenvolvimento do teste se baseia numa interface já existente, encontrada na pasta deste projeto. Uma dashboard simples para visualização/interação de links externos.

O objetivo é avaliar a capacidade de estimativa do desenvolvedor, em conjunto com a capacidade de se trabalhar com uma interface inacabada, e bons padrões de código.

A interface deve ser construida se baseando na imagem disponibilizada, e parte do teste representa o desenvolvedor correr atrás de alguns aspectos da interface:

- Família de ícones
- Tipografia
- Motion para interação com os elementos da interface
- (OPCIONAL) Visual "mobile-first/responsivo/adaptativo/fluído" (Baseado no approach escolhido pelo desenvolvedor)
- Ou seja, só tem o png mesmo para se basear

### Responsividade da interface
A interface deve atender alguns critérios:

- Permitir filtrar as postagens pela barra de pesquisa (Se eu digitar algo, deve filtrar pelo o que foi digitado, caso não encontre nada, mostrar um feedback).
- Filtrar as postagens a partir de filtros pré determinados
  - Popularidade
  - Data
  - Comentários
- (OPCIONAL) Ao realizar qualquer tipo de filtro, seria interessante animar os resultados de alguma maneira.

### Construção da interface
Em critérios de tecnologia, é esperado:

- Consumir o arquivo data.json para popular os links na interface (**Os dados estão no arquivo data.json**)
- Bons padrões de código. Linters (eslint, jshint, jscs, algum linter de css)
- Documentação de código (docblockr)
- Testes automatizados (TDD/BDD)
- Automatizador de tarefas
- Preprocessador
- Crossbrowser (Vamos ser legais e pedir IEegde+, Chrome e FF)
- (OPCIONAL) Testes de integração (E2E)
- (OPCIONAL) Utilização de algum FW para padronizar o fluxo de código
- (OPCIONAL) Trabalhar com esnext
- (OPCIONAL) Padronização de versionamento (git flow por exemplo)

### Critérios de aceite
Será considerado entrege, o teste que seguir os seguintes critérios:

- Atender todos os pontos já citados que são obrigatórios
- Versionamento a partir de algum ambiente (seja bitbucket ou github, privado ou pago)


#### Observações
- O footer, links, loadmore, botão de menu, ícone de usuário não precisam ter interação
- A estimativa de início/término do teste deve ser entregue até 24h após o recebimento do teste
- O repositório deve ser enviado ao iniciar o teste. 
- Não tenha medo de fazer perguntas, de verdade.
