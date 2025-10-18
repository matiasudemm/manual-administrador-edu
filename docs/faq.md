# Solución de problemas (FAQ)

- **`pip` compila paquetes:** 
- Instalar Build Tools (Windows) o `build-essential` (Linux). Verificar Python 3.10.x.
- **`torch` no detecta GPU:**
- Confirmar drivers NVIDIA y CUDA 11.8; probar `nvidia-smi`. Verificar que la imagen de llama.cpp tenga soporte CUDA.
- **`npm install` falla:**
- Use `npm ci` para respetar `package-lock.json`. Verificar Node 18.x.
- **Puerto en uso:**
- Cambiar `--port` o detener proceso conflictivo.
- **Backend no llega al LLM:**
- Revisar `LLM_SERVER_URL` y que el contenedor exponga 8080; `docker logs llama-server`.
- **Mongo sin datos:**
- Revisar mapeo del volumen (ruta absoluta, permisos) y existencia de `historial/`.
