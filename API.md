# Safari Escolar - API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication

All endpoints (except login) require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### POST /auth/login
Login to the system.

**Request:**
```json
{
  "email": "joao.professor@escola.com",
  "password": "password123"
}
```

**Response:**
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

### Classes

#### POST /classes
Create a new class (Teacher/Coordinator only).

**Request:**
```json
{
  "name": "Turma C - 3º Ano",
  "schoolId": "uuid"
}
```

**Response:**
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
List all classes (filtered by role).

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "Turma A - 1º Ano",
    "schoolId": "uuid",
    "teacherId": "uuid",
    "students": [...]
  }
]
```

#### GET /classes/:id
Get class details with students, attendance, and behavior events.

**Response:**
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

### Students

#### POST /students
Add a new student to a class (Teacher/Coordinator only).

**Request:**
```json
{
  "name": "João da Silva",
  "classId": "uuid",
  "animalAvatar": "Tigre" // optional, auto-assigned if not provided
}
```

**Response:**
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
List students (optionally filtered by classId).

**Query Parameters:**
- `classId` (optional): Filter by class

**Response:**
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

### Attendance

#### POST /attendance
Mark attendance for a student (Teacher only).

**Request:**
```json
{
  "studentId": "uuid",
  "present": true,
  "date": "2024-01-15" // optional, defaults to today
}
```

**Response:**
```json
{
  "id": "uuid",
  "studentId": "uuid",
  "present": true,
  "date": "2024-01-15T00:00:00.000Z"
}
```

#### GET /attendance/today/:classId
Get today's attendance for a class.

**Response:**
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

### Behavior Events

#### POST /behavior
Create a behavior event (Teacher only).

**Request:**
```json
{
  "studentId": "uuid",
  "type": "positive", // or "negative"
  "description": "Ajudou colega com tarefa"
}
```

**Response:**
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
List behavior events (optionally filtered by studentId).

**Query Parameters:**
- `studentId` (optional): Filter by student

**Response:**
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
Delete a behavior event (Teacher only).

**Response:**
```
204 No Content
```

---

### Dashboard

#### GET /dashboard
Get teacher dashboard with class statistics (Teacher only).

**Response:**
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

### Family View

#### GET /family
Get read-only view of student data for family members (Family only).

**Response:**
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

## Error Responses

All endpoints may return the following error responses:

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

## Animal Avatars

Available animal avatars for students:
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

If not specified during student creation, an avatar will be randomly assigned.
