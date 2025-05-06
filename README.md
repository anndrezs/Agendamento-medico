
# API de Agendamento Médico

Esta é uma API RESTful desenvolvida em Node.js com TypeScript e MongoDB, projetada para gerenciar agendamentos médicos. O sistema permite o cadastro de usuários com diferentes papéis (`admin`, `medico`, `paciente`), cadastro de especialidades, médicos, pacientes e agendamentos.

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB + Mongoose
- Insomnia (para testes de requisições)
- Dotenv (para variáveis de ambiente)

---

## Estrutura do Projeto

```
src/
├── controllers/   # Lida com as requisições e respostas da API
├── dtos/          # Data Transfer Objects (validação e tipagem dos dados)
├── models/        # Modelos do Mongoose
├── repository/    # Comunicação direta com o banco de dados
├── services/      # Regras de negócio
├── routes/        # Definição das rotas da aplicação
├── config/        # Configurações gerais (ex: conexão com banco)
└── app.ts         # Arquivo principal da aplicação
```

---

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz com as variáveis:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/agendamento
```

### 4. Execute a aplicação

```bash
npm run dev
```

---

## Endpoints Principais

### Usuários (`/users`)
- `POST /users` – Criação de usuários
- `GET /users` – Listagem de todos os usuários
- `GET /users/:id` – Buscar usuário por ID

### Especialidades (`/specialties`)
- `POST /specialties` – Criar especialidade
- `GET /specialties` – Listar especialidades

### Médicos (`/doctors`)
- `POST /doctors` – Cadastrar médico
- `GET /doctors` – Listar médicos

### Pacientes (`/patients`)
- `POST /patients` – Cadastrar paciente
- `GET /patients` – Listar pacientes

### Agendamentos (`/appointments`)
- `POST /appointments` – Criar agendamento
- `GET /appointments` – Listar agendamentos

---

## Exemplo de Body - Criação de Paciente

```json
{
  "userName": "Teste",
  "birthdate": "1998-09-18",
  "gender": "m",
  "medNotes": "Paciente diabético"
}
```

---

## Testes com Insomnia/Postman

Para testar os endpoints, você pode usar ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/). Certifique-se de que o servidor esteja rodando e use `http://localhost:3000` como base URL.

---

## Funcionalidades Futuras

- Autenticação com JWT
- Validação com class-validator
- Paginação e filtros nos endpoints
- Swagger para documentação

---

