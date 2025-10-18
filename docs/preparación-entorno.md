# Preparación del entorno (Windows + PowerShell)

1. Instalar: Git, Python 3.10.x (agregar a PATH), Node 18.x (vía nvm o instalador), Docker Desktop, drivers NVIDIA + CUDA 11.8.
2. Clonar repositorio (ruta ejemplo): C:\Edu20\
3. Política de ejecución de PowerShell para scripts locales (ejecutar como Administrador):
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
4. Verificar Docker:
docker version
   En Windows con WSL2: confirmar que “Use the WSL 2 based engine” esté activo en Docker Desktop.
