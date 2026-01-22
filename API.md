# Safari Escolar - Documentação da API

## URL Base

```text
http://localhost:3000/api
```

## Autenticação

Todos os endpoints (exceto login) exigem um token JWT no cabeçalho Authorization:

```text
Authorization: Bearer <token>
```

## Endpoints

### Autenticação (Endpoints)

#### POST /auth/login

Login no sistema.

**Requisição:**

```json
{
  "email": "joao.professor@escola.com",
  "password": "password123"
}
```

**Resposta:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "email": "joao.professor@escola.com",
    "name": "João Professor",
    "role": "TEACHER"
  }
}
```

---

### Turmas (Classes)

#### POST /classes

Criar uma nova turma (Apenas Professor/Coordenador).

**Requisição:**

```json
{
  "name": "Turma C - 3º Ano",
  "schoolId": "uuid"
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "name": "Turma C - 3º Ano",
  "schoolId": "uuid",
  "teacherId": "uuid",
  "school": { ... },
  "teacher": { ... }
}
```

#### GET /classes

Listar todas as turmas (filtrado por função).

**Resposta:**

```json
{
  "id": "uuid",
  "name": "Turma A - 1º Ano",
  "schoolId": "uuid",
  "teacherId": "uuid",
  "students": [...]
}
```

#### GET /classes/:id

Obter detalhes da turma com alunos, presença e eventos de comportamento.

**Resposta:**

```json
{
  "id": "uuid",
  "name": "Turma A - 1º Ano",
  "students": [
    {
      "id": "uuid",
      "name": "Pedro Silva",
      "animalAvatar": "Leão",
      "attendances": [...],
      "behaviorEvents": [...]
    }
  ]
}
```

---

### Alunos (Students)

#### POST /students

Adicionar um novo aluno a uma turma (Apenas Professor/Coordenador).

**Requisição:**

```json
{
  "name": "João da Silva",
  "classId": "uuid",
  "animalAvatar": "Tigre" // opcional, atribuído automaticamente se não fornecido
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "name": "João da Silva",
  "animalAvatar": "Tigre",
  "classId": "uuid",
  "familyId": null
}
```

#### GET /students

Listar alunos (opcionalmente filtrado por classId).

**Parâmetros de Consulta:**

- `classId` (opcional): Filtrar por turma

**Resposta:**

```json
[
  {
    "id": "uuid",
    "name": "Pedro Silva",
    "animalAvatar": "Leão",
    "class": { ... },
    "family": { ... }
  }
]
```

---

### Presença (Attendance)

#### POST /attendance

Registrar presença de um aluno (Apenas Professor).

**Requisição:**

```json
{
  "studentId": "uuid",
  "present": true,
  "date": "2024-01-15" // opcional, padrão é hoje
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "studentId": "uuid",
  "present": true,
  "date": "2024-01-15T00:00:00.000Z"
}
```

#### GET /attendance/today/:classId

Obter presença de hoje para uma turma.

**Resposta:**

```json
[
  {
    "id": "uuid",
    "name": "Pedro Silva",
    "animalAvatar": "Leão",
    "attendances": [
      {
        "id": "uuid",
        "present": true,
        "date": "2024-01-15T00:00:00.000Z"
      }
    ]
  }
]
```

---

### Comportamento (Behavior Events)

#### POST /behavior

Criar um evento de comportamento (Apenas Professor).

**Requisição:**

```json
{
  "studentId": "uuid",
  "type": "positive", // ou "negative"
  "description": "Ajudou colega com tarefa"
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "studentId": "uuid",
  "type": "positive",
  "description": "Ajudou colega com tarefa",
  "date": "2024-01-15T14:30:00.000Z"
}
```

#### GET /behavior

Listar eventos de comportamento (opcionalmente filtrado por studentId).

**Parâmetros de Consulta:**

- `studentId` (opcional): Filtrar por aluno

**Resposta:**

```json
[
  {
    "id": "uuid",
    "type": "positive",
    "description": "Ajudou colega com tarefa",
    "date": "2024-01-15T14:30:00.000Z",
    "student": { ... }
  }
]
```

#### DELETE /behavior/:id

Excluir um evento de comportamento (Apenas Professor).

**Resposta:**

```text
204 No Content
```

---

### Dashboard

#### GET /dashboard

Obter dashboard do professor com estatísticas da turma (Apenas Professor).

**Resposta:**

```json
[
  {
    "classId": "uuid",
    "className": "Turma A - 1º Ano",
    "totalStudents": 6,
    "todayAttendance": 5,
    "attendanceRate": 83.33,
    "todayPositiveEvents": 2,
    "todayNegativeEvents": 1
  }
]
```

---

### Visão da Família (Family View)

#### GET /family

Obter visualização somente leitura dos dados do aluno para membros da família (Apenas Família).

**Resposta:**

```json
{
  "students": [
    {
      "id": "uuid",
      "name": "Pedro Silva",
      "animalAvatar": "Leão",
      "className": "Turma A - 1º Ano",
      "teacherName": "João Professor",
      "attendanceRate": 90.5,
      "positiveEvents": 5,
      "negativeEvents": 1,
      "recentAttendances": [...],
      "recentBehaviorEvents": [...]
    }
  ]
}
```

---

## Respostas de Erro

Todos os endpoints podem retornar as seguintes respostas de erro:

### 400 Bad Request

```json
{
  "error": "Validation error message"
}
```

### 401 Unauthorized

```json
{
  "error": "Invalid token"
}
```

### 403 Forbidden

```json
{
  "error": "Not authorized"
}
```

### 404 Not Found

```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal server error"
}
```

## Avatares de Animais

Avatares de animais disponíveis para estudantes:

- Leão
- Tigre
- Elefante
- Girafa
- Zebra
- Macaco
- Urso
- Lobo
- Raposa
- Coelho
- Panda
- Koala

Se não for especificado durante a criação do aluno, um avatar será atribuído aleatoriamente.
