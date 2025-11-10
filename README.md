# Primeiro Angular — Projeto de exemplo

Projeto de estudo/prático em Angular que implementa uma pequena SPA com três telas principais: Home, Pomodoro e To‑Do. O objetivo foi aprender conceitos do Angular moderno (Signals, componentes isolados, serviços) e montar uma aplicação simples para desenvolvimento frontend.

Principais funcionalidades

- Lista de tarefas (To‑Do) com criação, troca de status (Completo/Pendente) e remoção. Dados persistem no localStorage.
- Pomodoro simples com start / pause / reset e contagem (utilizando setInterval). Exibição formatada com dois dígitos.
- Estrutura de layout com header, menu lateral e roteamento entre telas.

Decisões de implementação

- Uso de Signals (API reativa do Angular) para estado local dos componentes e serviços.
- Lógica de estado e persistência colocada em serviços (ex.: `TodosService`) para facilitar reutilização e testes.
- Templates e componentes organizados em `src/app/components` e `src/app/screens`.

Como rodar (desenvolvimento)

1. Certifique-se de ter Node.js (versão compatível com Angular do projeto) e npm instalados.
2. No terminal, na raiz do projeto, instale dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

4. Abra http://localhost:4200 (ou a porta indicada no terminal).

Estrutura principal do projeto

- `src/app/`
  - `components/` — componentes compartilhados (header, menu, layout)
  - `screens/` — telas da aplicação (`home`, `pomodoro`, `todo`)
  - `service/` — serviços (ex.: `todos-service.ts`)
  - `model/` — entidades/typing (ex.: `todo.entity.ts`)

Arquivos importantes

- `src/app/screens/todo/todo.ts` e `todo.html` — interface de lista de tarefas e integração com `TodosService`.
- `src/app/service/todos-service.ts` — serviço responsável por manter, persistir e manipular tarefas.
- `src/app/screens/pomodoro/pomodoro.ts` e `pomodoro.html` — timer com start/pause/reset.
