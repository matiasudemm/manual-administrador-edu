# MongoDB en Docker
- Imagen y contenedor:
- Desde carpeta mongodb/ del repositorio

```bash
docker build -t tutor_mongo .
```
- Primera ejecución (modo daemon, puerto 27017 y volumen linkeado)
```bash
docker run -d --name tutor_mongo -p 27017:27017 -v ${PWD}/historial:/data/db tutor_mongo
```
# reinicios posteriores
```bash
docker start tutor_mongo
```

- Carpeta `historial/` 
Contiene los archivos de la base de datos (repositorio físico de MongoDB).
- Migración
Copiar esta carpeta al nuevo servidor y recrear el contenedor apuntando al nuevo path.
- Backups en frío:
Detener
```bash
docker stop tutor_mongo
```
Backup
```bash
Compress-Archive -Path .\historial -DestinationPath .\mongo_historial_YYYYMMDD.zip
```
Restaurar
Descomprimir y ejecutar 
```bash
docker run con -v <path>:/data/db
```

