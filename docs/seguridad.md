# Seguridad y Buenas Prácticas

- HTTPS obligatorio en producción (certificados válidos).
- Variables sensibles sólo en `.env`/secret store. Nunca commitear secretos.
- Rotación de claves JWT y contraseñas de DB.
- Firewalls: exponer sólo puertos necesarios.
- Limitar orígenes CORS al dominio oficial.
- Actualizar periódicamente dependencias y contenedores.
- Monitoreo y alertas (CPU, RAM, errores 5xx, colas de trabajo, etc.).
