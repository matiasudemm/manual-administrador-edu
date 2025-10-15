# Copias de seguridad y restauración

## Archivos críticos
- `.env`, scripts `*.ps1`, `Dockerfile*`, carpetas `contextos/`.

## Bases de datos
- MySQL: `mysqldump` diario.
- MongoDB: backup en frío de `historial/`.

## Pruebas
Validar backups mensualmente en entorno de staging.
