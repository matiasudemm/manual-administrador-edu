# Automatización con PowerShell (iniciar.ps1)

Objetivo: Orquestar el arranque local: levantar Mongo en Docker (si no está corriendo), el servidor LLM y los procesos de backend/frontend.

## Recomendaciones de uso:
- Ubicar `iniciar.ps1` en la raíz del proyecto.
- Abrir PowerShell en esa carpeta y ejecutar:
```powershell
.\iniciar.ps1
```
- Si se definió un alias `iniciar`, también puede invocarse escribiendo:
iniciar

## Consideraciones:

- Asegurar `Set-ExecutionPolicy RemoteSigned` (scope CurrentUser).
- El script debería validar prerequisitos (Docker, Python, Node), crear/activar venv, ejecutar `pip install -r requirements.txt`, `npm ci`, y levantar servicios en el orden correcto.
- Incluir logs y manejo de errores (si un servicio falla, mostrar mensaje claro y no cerrar la consola automáticamente).
