# Proyecto

Store Online - Gestión de Ventas, Usuarios cliente y marcas

## Descripción

Proyecto en PHP:
  - Gestion de Ventas: organizados con Categorias, Marcas, Productos destacados y fecha de actualización del producto.
  - Usuarios Cliente: Usuario conocido con un perfil en la base de datos y anónimo de la aplicación cuyos datos son temporales.
  - Usuarios Afiliados: Con un perfil de marca, es decir que proporciona productos para vender.

### Pre-requisitos

- Servidor para php.
- Servidor para MySql.

### Instalación

1. Descargar una copia del proyecto
2. Ubicar la carpeta de app
3. Copiar la carpeta completa
4. Pega la copia en el servidor php
5. En la copia del proyecto, ubicar la carpeta que contiene el backup "database"
6. Importa el backup en tu Workbench
7. Verificar los datos para password y user en el proyecto php, la clase se llama Conector
8. Todo Listo

- Ejemplo

1. Servidor Xampp para php, en la carpeta de descargar copiar el archivo perteneciente al proyecto: Folder/Store Online/App
2. C:/xampp/htdocs -paste
3. Folder/Store Online/database/backup.sql -copy
4. En Workbench abrir el archivo backup.sql / Exccute Query
5. Verificar datos, C:/xampp/htdocs/app/classes/Conector.php: $db = new PDO("mysql:host=hostname;dbname=store_online", 'user', 'password');
6. Correr la aplicación, en el navegador escribe la dirección para acceder, ejemplo: localhost:8080/app

> http://"hostname":"portnumber"/"folder"

## Autores

[* **Manuel Iván Escobar Castillo**](https://github.com/mieco7832) - *Trabajo Inicial y Documentación*

## Licencia
> MIT License [read](https://github.com/mieco7832/Store-Online)
