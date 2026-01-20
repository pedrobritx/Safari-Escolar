# Safari Escolar Tutorial

This guide provides step-by-step copy-paste instructions to get the Safari Escolar application running locally.

## Prerequisites

Ensure you have the following installed:
- Node.js (LTS)
- Python (3.x)
- PostgreSQL

## Step 1: Backend Setup (Terminal 1)

Open a terminal and run the following commands to set up and start the Django backend:

```bash
# Navigate to the API directory
cd apps/api

# Create a virtual environment
python3 -m venv .venv

# Activate the virtual environment
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Start the server
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`.

## Step 2: Frontend Setup (Terminal 2)

Open a **new** terminal window (keep the backend running) and run the following commands:

```bash
# Navigate to the Web directory
cd apps/web

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will be available at `http://localhost:3000`.

## Step 3: Accessing the App

1.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2.  Use the credentials listed in `CREDENTIALS.md` to log in.
