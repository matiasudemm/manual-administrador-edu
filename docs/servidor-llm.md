# Servidor LLM (llama.cpp + GPU)

## Construcción
```bash
docker build --no-cache -f Dockerfile.dev -t llama-server .
```

## Ejecución
```bash
docker run --gpus all -p 8080:8080 --name llama-server llama-server
```
Verificar `LLM_SERVER_URL` en backend apunte a `http://localhost:8080/completion`.
