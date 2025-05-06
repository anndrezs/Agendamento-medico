# Sistema de Agendamento Médico - MEDSYNC

Este projeto é uma API RESTful desenvolvida com **Node.js**, **TypeScript** e **Express**, com persistência em **MongoDB** utilizando **Mongoose**. Ele simula um sistema de agendamentos médicos, permitindo o cadastro de usuários (admin, médico e paciente), especialidades, médicos, pacientes e agendamentos.


## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- Insomnia (para testes da API)


## Estrutura do Projeto

src/
├── controllers/       # Lida com as requisições e respostas da API
├── dtos/              # Data Transfer Objects (validação e tipagem dos dados)
├── models/            # Modelos do Mongoose
├── repository/        # Comunicação direta com o banco de dados
├── services/          # Regras de negócio
├── routes/            # Definição das rotas da aplicação
├── config/            # Configurações gerais (ex: conexão com banco)
└── app.ts             # Arquivo principal da aplicação


## Funcionalidades

### Usuário
- Criação de usuários com papéis (`admin`, `medico`, `paciente`)
- Listagem de todos os usuários
- Busca de usuário por ID

### Especialidade
- Cadastro de especialidades médicas
- Listagem de especialidades
- Busca de especialidade por nome

### Médico
- Cadastro de médicos (associado a um usuário e especialidade)
- Listagem de médicos

### Paciente
- Cadastro de pacientes (associado a um usuário)
- Listagem de pacientes

### Agendamento
- Criação de agendamento médico
- Listagem de agendamentos


## Como Executar Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure a conexão com o banco MongoDB:**

Crie um arquivo `.env` com a seguinte variável:

```
MONGO_URI=mongodb://localhost:27017/seu-banco
```

4. **Inicie o projeto:**

```bash
npm run dev
```

## Requisições no Insomnia

Exemplo de body para criação de usuário:

```json
{
  "name": "Teste",
  "email": "teste@teste",
  "role": "paciente"
}
```

Exemplo de body para criação de paciente:

```json
{
  "userName": "Teste",
  "birthdate": "1990-01-01",
  "gender": "m",
  "medNotes": "Paciente saudável"
}
```

## Organização do Código

- **DTOs**: Tipagem e estrutura dos dados recebidos nas requisições.
- **Repository**: Responsável por se comunicar diretamente com os Models e o banco.
- **Service**: Onde ficam as regras de negócio.
- **Controller**: Apenas chama os services e retorna as respostas apropriadas.