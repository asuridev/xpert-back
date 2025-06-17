# Prueba Técnica:
Para el desarrollo de la prueba se optó por utilizar el framework nest https://nestjs.com/ el cual está construido sobre express. Este brinda un motor de inyección de dependencia el cual permite  construir soluciones con mejores practicas de desarrollo.

## Desarrollo de la API-REST
Para el desarrollo de la API-REST se utilizó una arquitectura de tres capas:
- controller
- persistence
- services

se construyeron los endpoints para resolver los cruds asociados a los breeds, imagenes y 
dos esnpoints para registrar y autenticar usuarios.
!["documentacion"](/assets/documentacion.png)


## Persistencia  de los datos
Para esta tarea se implementó la base de datos mongodb. el servidor se conectó a esta utilizando el ODM de mongoose.

!["data-base"](/assets/database.png)

Se utilizó repository como patrón para la persistencia de los datos y desacoplar lógica de dominio de los detalles de la base de datos.

## Deployment del proyecto.
Para el despliegue del proyecto seguir los siguientes pasos:

1. Clonar el repositorio.

```shell script
git clone https://github.com/asuridev/xpert-back.git
```
2. Ingresar a la raíz del proyecto.

```shell script
cd xpert-back
```
3. Ejecutar docker-compose

```shell script
docker compose up --build
```
Este ultimo comando construirá un cluster de docker-compose con dos contenedores, uno para el servidor y otro para la base de datos de mongodb.

## Verificando el funcionaminto del proyecto.

### Validación de los endpoints
La API-REST expone los endponints en el puerto 3000, la url para registrar un usuario:

```
localhost:3000/api/v1/auth/register
```

Mediante una solicitud POST con los campos requeridos registrará un usuario en la base de datos.
```
{
    "email":"maria@gmail.com",
    "password": "1234",
}
```
tambien se pueden validar los endpoints que permitiran obtener las razas de los gatos
y las imagenes. Encontrará un documentacion detallada de estos en la documentación adjunta.
> **_NOTA:_**  Ver la documentación del enpoint publicada en el siguinte enlace: https://documenter.getpostman.com/view/19057359/2sB2x8Grue

### Consulta de la Base de datos.
Luego de ingresar varios registros de forma exitosa a traves del endpoint, se puede realizar la conexión a la base de datos para verificar la persistencia de los mismos.

El cluster de docker-compose expone el puerto **27017** para permitir la conexión mediante un cliente gráfico de mongodb (MongoDB compass).

Parametros de conexion de la base de datos

```
host: localhost
port: 27017
database: xpert
```