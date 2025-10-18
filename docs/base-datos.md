# Configuración de Bases de Datos

## MySQL
- Crear base de datos `edu`.
- Importar esquema inicial desde scripts SQL proporcionados.
- Configurar credenciales en el backend.

## MongoDB
- Se crea automáticamente al iniciar el sistema.
- Las credenciales se encuentran en el backend.

### Backups
```bash
mysqldump -u edu -p --routines --triggers edu > backup_edu_YYYYMMDD.sql
```
