# DevHub - Plataforma de Gerenciamento de Desenvolvedores e Projetos

Bem-vindo ao DevHub! O DevHub é uma plataforma para gerenciar desenvolvedores e projetos de forma eficiente.

## Funcionalidades Principais

- **Cadastro de Desenvolvedores:**
  - Nome
  - Email
  - LinkedIn
  - GitHub
  - Currículo

- **Cadastro de Projetos:**
  - Nome
  - Descrição
  - Link do GitHub

#
#
#

  ### Requisitos Funcionais

- Cadastro de Desenvolvedores:
- [ ] Permitir que os usuários cadastrem suas informações pessoais e profissionais.
- [ ] Campos obrigatórios: Nome, Email, LinkedIn, GitHub, Currículo.
- [ ] Validar a unicidade do e-mail para evitar duplicatas.

- Cadastro de Projetos:
- [ ] Possibilitar o registro de informações relacionadas a projetos.
- [ ] Campos obrigatórios: Nome, Descrição, Link do GitHub.
- [ ] Associar desenvolvedores aos projetos durante o cadastro.

- Listagem de Desenvolvedores:
- [ ] Exibir uma lista de todos os desenvolvedores cadastrados.
- [ ] Permitir filtragem por nome, e-mail, LinkedIn ou GitHub.

- Listagem de Projetos:
- [ ] Exibir uma lista de todos os projetos cadastrados.
- [ ] Permitir filtragem por nome ou desenvolvedor associado.

#
#
#

### Requisitos Não Funcionais

- Segurança:
- [ ] Garantir que as senhas sejam armazenadas de forma segura, utilizando técnicas adequadas de hash e sal.

- Desempenho:
- [ ] Manter um tempo de resposta aceitável para todas as operações, mesmo com um grande número de registros.

- Usabilidade:
- [ ] Projetar uma interface de usuário intuitiva e fácil de usar.

- Disponibilidade:
- [ ] Garantir que a plataforma esteja disponível para uso a maior parte do tempo, com o mínimo de tempo de inatividade possível.

#
#
#

### Regras de Negócio:

- [ ] Um único endereço de e-mail não pode ser usado para cadastrar mais de um desenvolvedor.
Associação de Desenvolvedores a Projetos:

- [ ]Cada projeto deve ter pelo menos um desenvolvedor associado.
Atualização de Informações:

- [ ] Desenvolvedores e projetos devem ter a capacidade de atualizar suas informações cadastradas.
Remoção de Desenvolvedores e Projetos:

- [ ]Desenvolvedores e projetos devem poder ser removidos da plataforma, garantindo a integridade dos dados relacionados.