# Servidor LLM (llama.cpp + GPU)

## Construcción
```bash
docker build --no-cache -f Dockerfile.dev -t llama-server .
```

## Ejecución inicial (puerto 8080, con GPU)
```bash
docker run --gpus all -p 8080:8080 --name llama-server llama-server
```
## Notas:
Montar carpeta de modelos GGUF si el contenedor los espera en host (ej.: `-v C:\Modelos:/models`).
Verificar `LLM_SERVER_URL` en backend apunte a `http://localhost:8080/completion`.
Consultar logs: `docker logs -f llama-server`.