# Safari Escolar

MVP para o hackathon "Auxílio aos professores no ensino público" com foco em baixo consumo de dados e uso mobile-first.

## Stack
- Django + templates server-rendered
- SQLite por padrão (Postgres configurável via variáveis)

## Setup rápido
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python safari_escolar/manage.py migrate
python safari_escolar/manage.py seed_demo
python safari_escolar/manage.py runserver
```

## Credenciais demo
- Admin: `admin / admin123`
- Coordenação: `coordinator / coord123`
- Professor(a) 1: `teacher1 / teacher123`
- Professor(a) 2: `teacher2 / teacher123`
- Família 1-4: `family1..4 / family123`

## MVP demo path
1. Login professor → painel
2. Abrir turma → chamada de hoje
3. Registrar evento (+/- pontos)
4. Ver painel do professor
5. Login família → resumo do estudante

## Variáveis de ambiente
- `SECRET_KEY`
- `DEBUG`
- `ALLOWED_HOSTS`
- `DB_ENGINE`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`
