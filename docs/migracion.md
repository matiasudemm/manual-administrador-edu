# Migración de servidor

1. Copiar repositorio y archivos de configuración (`.env`, scripts, etc.).
2. Instalar prerequisitos (Python/Node/Docker/CUDA).
3. Restaurar MySQL desde dump.
4. Copiar carpeta `historial/` de Mongo al nuevo host y recrear contenedor con `-v <nuevo_path>:/data/db`.
5. Desplegar LLM y validar conectividad desde backend.
6. Levantar backend/frontend y ejecutar pruebas funcionales.
