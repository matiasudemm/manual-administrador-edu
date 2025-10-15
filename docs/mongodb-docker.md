# MongoDB en Docker

```bash
docker build -t tutor_mongo .
docker run -d --name tutor_mongo -p 27017:27017 -v ${PWD}/historial:/data/db tutor_mongo
```
- Carpeta `historial/` contiene los datos.
- Para backup:
```bash
docker stop tutor_mongo
Compress-Archive -Path .\historial -DestinationPath .\mongo_historial_YYYYMMDD.zip
```
