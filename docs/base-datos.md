# Configuración de Bases de Datos

## MySQL
- Crear base de datos `edu`.
- Importar esquema inicial.
- Configurar credenciales en el backend.

## MongoDB
- Se crea automáticamente al iniciar el sistema.
- Credenciales definidas en el backend.

### Backups
```bash
mysqldump -u edu -p --routines --triggers edu > backup_edu_YYYYMMDD.sql
```
