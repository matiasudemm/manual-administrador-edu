# Automatización con PowerShell (iniciar.ps1)

Objetivo: orquestar el arranque local (MongoDB, LLM, backend, frontend).

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
.\iniciar.ps1
```
- Valida prerequisitos (Docker, Python, Node).
- Logs y manejo de errores incluidos.
