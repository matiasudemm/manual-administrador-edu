# Instalación del Backend

1. Clonar el repositorio del proyecto.
2. Crear y activar entorno virtual de Python.
3. Instalar dependencias con `pip install -r requirements.txt`.
4. Configurar variables de entorno (.env) con parámetros de MySQL, MongoDB y servidor LLM.
5. Ejecutar `uvicorn app.main:app --reload`.

## Producción
- Servir con Gunicorn/Uvicorn workers detrás de un proxy (IIS/ARR o Nginx) con HTTPS.
- Registrar logs (rotación diaria), healthchecks y monitoreo.