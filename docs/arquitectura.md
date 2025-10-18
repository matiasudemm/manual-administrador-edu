# Visión general de la arquitectura

## Componentes principales
- **Frontend**: React + Vite. Consume API REST del backend.
- **Backend**: FastAPI (Python 3.10.x).
- **MySQL 8.x**: base relacional.
- **MongoDB 6.x**: base documental.
- **Servidor LLM**: llama.cpp (GPU).

## Puertos típicos
- **Frontend** dev: 5173 / Producción: 80/443
- **Backend:** 8000 o 80/443 tras proxy
- **MongoDB:** 27017/tcp
- **LLM:** 8080/tcp
