# Copias de seguridad y restauración

## Backend/Configuración: 
- Respaldar `.env`, scripts `*.ps1`, `Dockerfile*`, y carpetas `contextos/`.

## Bases de datos
- MySQL: `mysqldump` diario y retención 14–30 días.
- MongoDB: backup en frío de `historial/`(o `mongodump` si se expone).

## Frontend:
- Respaldar `src/` y artefactos de build si aplica.

## Pruebas de restauración:
- Validar backups mensuales en entorno de staging.
