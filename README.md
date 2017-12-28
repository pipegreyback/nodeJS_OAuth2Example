# TEL 252 - Implementation of OAUTH2.0
# nodeJS_OAuth2Example
# Felipe Condon Silva
El siguiente repositorio describe la implementacion de oauth 2.0, las dependencias son las siguintes.

# Dependencias:
* mySql
* nodejs
* express
* body-parser

## Como utilizar:
* Se debe clonar el repositorio.
* Se debe ir al directorio raiz.
* Se deben instalar los modulos y dependencias con el comando `$ npm install`.
* Una vez instalados los modulos, se procede a ejecutar el programa. `$ node app`.
* Esto dejara corriendo la app en la direccion http://localhost:8080.

## Realizacion de requests:
* Se recomienda utilizar Postman para realizar los requests.
* Primero, se debe crear un usuario en el sistema, esto puede realizarse con un POST request hacia http://localhost:8080/auth/registerUser,
el contenido de los campos son descritos en el siguiente JSON:
 ```
{
	'username':username,
	'password': password,
	'grant_type': 'password',
	'client_id':'null',
	'client_secret':'null'
}
```
* Segundo, se debe comprobar que el login es exitoso, para lo que debemos realizar un request POST hacia http://localhost:8080/auth/login,
el contenido del JSON son los mismos que para el registo, con lo que debiesemos obtener un mensaje de exito.
* Tercero, podemos intentar acceder a alguna zona de acceso restringido, para lo que debemos utilizar el token generado por el request POST de login,
se debe enviar un request POST a la ruta http://localhost:8080/restrictedArea/enter , en este caso, no es necesario enviar informacion a traves del body,
se debe enviar el token obtenido del login en el header del request, para esto, debemos utilizar la siguiente estructura 
```
{
	'Authorization':'Bearer + [key]'
}
```
Notar que en la llave de Authorization, debe ser compuesto por la frase Bearer, junto con el token generado por el login.
