FROM python:3.12-slim

ENV PythonUNBUFFERED=1

WORKDIR /app

# Install system dependencies (e.g. for simplejwt or postgres)
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY apps/api/requirements.txt ./apps/api/
RUN pip install -r apps/api/requirements.txt

COPY . .

WORKDIR /app/apps/api
