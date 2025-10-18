# Instalación del Frontend

1. Ingresar a la carpeta `frontend`.
2. Ejecutar `npm install`.
3. Configurar archivo `.env` con la URL del backend.
4. Ejecutar `npm run dev`.

## Producción
```bash
npm run build
```
Desplegar `dist/` detrás de un servidor (IIS, Nginx, etc.).

Configurar `VITE_API_BASE` en `.env` para apuntar al backend.
