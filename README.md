
# Bienvenidos a Sinapsis Shop App!


## Descripcion del Proyecto

Sinapsis Shop App es una aplicación de comercio electrónico móvil diseñada para ofrecer una experiencia de usuario fluida y atractiva para la compra de productos tecnológicos. Con una interfaz limpia y fácil de usar, los usuarios pueden explorar productos, añadirlos al carrito, y gestionar sus pedidos con facilidad. 

## Tecnologías Utilizadas  

- React Native - Redux y Redux Toolkit para el manejo del estado 
- Expo para el desarrollo y pruebas en dispositivos 
- Firebase para autenticación y almacenamiento de datos en tiempo real 
- SQLite para el almacenamiento local de datos 
- React Navigation para la navegación entre pantallas 

## Instalación 

Para instalar y ejecutar Sinapsis Shop App en tu entorno de desarrollo local, sigue estos pasos: 

1. Clona el repositorio de GitHub:
	```
	```bash git clone 
	https://github.com/tuUsuario/sinapsis-shop-app.git
	```
2. Navega al directorio del proyecto:
	```
	cd sinapsis-shop-app
	```
3. Instala las dependencias necesarias:
	```
	npm install
	```
4. Inicia el proyecto con Expo:
	```
	expo start
	```
5. Sigue las instrucciones en la terminal para abrir la aplicación en tu dispositivo o emulador.

Estos pasos deberían guiarte a través del proceso de instalación del proyecto desde el clonado del repositorio hasta la ejecución de la aplicación en un entorno de desarrollo local.

## Dependencias Utilizadas

- `@react-navigation/native`: Utilizada para la navegación entre las diferentes pantallas de la aplicación. Es esencial para crear una experiencia de usuario fluida y coherente en aplicaciones móviles.

- `@reduxjs/toolkit`: Una herramienta que simplifica la configuración y el manejo del estado global en aplicaciones React. Se usa para gestionar el estado de la aplicación de manera eficiente y con menos código.

- `expo`: Un marco de trabajo que permite desarrollar aplicaciones React Native y probarlas rápidamente en dispositivos reales. Expo proporciona un conjunto de herramientas y servicios que facilitan el desarrollo, incluyendo acceso a APIs nativas sin necesidad de configuraciones complejas.

- `firebase`: Utilizada para añadir funcionalidades de backend como autenticación de usuarios, almacenamiento de datos en tiempo real y hosting. Es una solución potente y flexible para desarrollar aplicaciones móviles sin gestionar servidores.

- `react-native`: El framework de desarrollo de aplicaciones móviles de código abierto para construir aplicaciones nativas usando React. Permite desarrollar aplicaciones para Android e iOS con una base de código compartida.

- `react-redux`: Una biblioteca que facilita la integración de Redux con componentes React. Se utiliza para conectar componentes con el estado global y acceder a las acciones de Redux.

- `redux`: Un contenedor de estado predecible para aplicaciones JavaScript. Se usa para gestionar el estado de la aplicación de forma centralizada, lo que es útil para aplicaciones con complejidad considerable.

- `yup`: Yup es una biblioteca de construcción de esquemas para análisis y validación de valores JavaScript. En Sinapsis Shop App, utilizamos Yup para garantizar que la entrada del usuario en formularios cumpla con ciertos requisitos antes de ser procesada o enviada al servidor. Esto mejora la seguridad de la aplicación, la experiencia del usuario y la integridad de los datos.

Estas dependencias constituyen la base sobre la que se construye Sinapsis Shop App, permitiendo una estructura robusta, manejo eficiente del estado, y una experiencia de usuario rica y responsiva. Además de estas, el proyecto utiliza otras bibliotecas y herramientas para tareas específicas como validación de formularios, manejo de solicitudes HTTP, y estilización de componentes, entre otras, para facilitar el desarrollo y mejorar la experiencia del usuario.



## Funcionalidades de la Aplicación

### Autenticación de Usuarios

- **Registro**: Los usuarios pueden crear una cuenta proporcionando un correo electrónico y una contraseña. El proceso incluye verificación de email para validar la cuenta.

    ![Screenshot del screen Registro](/assets/mdPics/Signup.jpg)

- **Inicio de Sesión**: Los usuarios registrados pueden acceder a su cuenta utilizando su correo electrónico y contraseña.

    ![Screenshot del screen Inicio de Sesion](/assets/mdPics/Login.jpg)

- **Cierre de Sesión**: Los usuarios pueden cerrar sesión de forma segura, lo cual borra su sesión del dispositivo.

    ![Screenshot del boton Cerrar Sesion](/assets/mdPics/CloseSession.jpg)

### Validación de Formularios con Yup

#### Características Principales

- **Sintaxis Concisa**: Yup permite definir un esquema de validación con una sintaxis clara y concisa, facilitando la lectura y mantenimiento del código.
- **Validación Asíncrona y Sincrónica**: Ofrece soporte tanto para validaciones síncronas como asíncronas, lo cual es útil para verificaciones que requieran de llamadas a una API, por ejemplo, para validar la unicidad de un correo electrónico.
- **Personalización de Mensajes de Error**: Permite personalizar los mensajes de error para cada regla de validación, lo que ayuda a proporcionar retroalimentación específica y útil al usuario.
- **Casting Automático de Tipos**: Capacidad de transformar automáticamente los valores de los campos a tipos específicos según el esquema definido.

#### Implementación en Sinapsis Shop App

En nuestra aplicación, utilizamos Yup principalmente en los formularios de autenticación y registro.

- Para el formulario de **registro** asegura que el usuario proporcione un correo electrónico válido, una contraseña con la longitud adecuada, y que la confirmación de la contraseña coincida exactamente con la contraseña ingresada.
- Para el formulario de **login** asegura que el usuario proporcione un correo electrónico válido, una contraseña con la longitud adecuada, y que la misma sea la vinculada con el email registrado.

### Visualización de Productos por Categorías
- Los productos están organizados por categorías para facilitar la navegación. Los usuarios pueden seleccionar una categoría para ver los productos relacionados, mejorando la experiencia de compra.
    ![Screenshot del screen Vista por Categorias](/assets/mdPics/CategoriesList.jpg)

### Navigation Tab Bar

El Navigation Tab Bar en Sinapsis Shop App ofrece una navegación intuitiva y accesible por las principales secciones de la aplicación, mejorando significativamente la experiencia de usuario. Cada pestaña del Tab Bar está diseñada para facilitar el acceso a las funcionalidades clave de la aplicación:

   ![Screenshot del Navigation Tab Bar](/assets/mdPics/NavigationTabBar.jpg)


- **ShopStack**: Permite a los usuarios explorar el catálogo completo de productos disponibles en Sinapsis. Desde aquí, pueden navegar por diferentes categorías, ver las novedades y las ofertas especiales.

    ![Screenshot del ShopStack](/assets/mdPics/ShopStack.jpg)

- **CartStack**: Ofrece a los usuarios una vista rápida de su carrito de compras actual, permitiéndoles revisar los productos añadidos, modificar cantidades, eliminar artículos no deseados o proceder al checkout.

    ![Screenshot del CartStack](/assets/mdPics/CartStack.jpg)

- **OrdersStack**: Los usuarios pueden visualizar el historial completo de sus pedidos, incluyendo detalles como fecha de compra, estado del pedido, y un resumen de los artículos comprados.

    ![Screenshot del OrdersStack](/assets/mdPics/OrderStack.jpg)

- **MyProfileStack**: Facilita el acceso a la personalización del perfil del usuario, donde pueden actualizar su foto de perfil, gestionar su dirección de envío, y ajustar otras preferencias de cuenta.

    ![Screenshot del ProfileStack](/assets/mdPics/MyProfileStack.jpg)

Cada una de estas pestañas está optimizada para ofrecer una experiencia de usuario fluida y coherente, asegurando que los usuarios puedan navegar por la aplicación con facilidad y realizar sus tareas deseadas de manera eficiente.


### Búsqueda, Filtrado y Detalle de Productos
- **Búsqueda**: Los usuarios pueden buscar productos utilizando palabras clave. La búsqueda devuelve productos que coinciden con el término buscado en su título o descripción.

    ![Screenshot del Input para Busqueda](/assets/mdPics/SearchFilter.jpg)

- **Filtrado**: Los usuarios pueden filtrar los productos dentro de una categoría por diferentes criterios como precio, popularidad, o novedades.

    ![Screenshot de la lista de productos filtrada](/assets/mdPics/ItemsList.jpg)

- **Detalle**: Los usuarios pueden obtener informacion detallada sobre los productos por diferentes criterios como descripcion y precio.

    ![Screenshot del detalle del producto](/assets/mdPics/ItemsList.jpg)

### Gestión del Carrito de Compras
- Los usuarios pueden añadir productos a su carrito de compras desde las páginas de detalles del producto.
- Pueden modificar la cantidad de cada producto en el carrito o eliminar productos que ya no deseen comprar.
- El carrito muestra el total de la compra y permite a los usuarios proceder al checkout.

    ![Screenshot del Carrito de compras](/assets/mdPics/Cart.jpg)

### Realización y Visualización de Pedidos
- **Realización de Pedidos**: Una vez que los usuarios están listos para comprar, pueden proceder a realizar el pedido, proporcionando detalles de pago y dirección de envío.
- **Visualización de Pedidos**: Los usuarios pueden ver un historial de sus pedidos realizados, incluyendo los detalles de cada pedido como la lista de productos, la cantidad pagada, y el estado del envío.

    ![Screenshot de las ordenes confirmadas](/assets/mdPics/OrdersPlaced.jpg)

### Personalización del Perfil de Usuario

   ![Screenshot del ProfileStack](/assets/mdPics/MyProfile.jpg)

- **Foto de Perfil**: Los usuarios pueden subir o cambiar su foto de perfil.

    ![Screenshot del ProfileStack](/assets/mdPics/Camera.jpg)
    ![Screenshot del ProfileStack](/assets/mdPics/ProfilePictureConfirmation.jpg)
    ![Screenshot del ProfileStack](/assets/mdPics/MyProfileActualized.jpg)

- **Dirección**: Los usuarios pueden añadir o modificar su dirección de envío. Esta dirección se puede utilizar posteriormente para facilitar el proceso de checkout.

    ![Screenshot del ProfileStack](/assets/mdPics/GoogleMapsPerm.jpg)
    ![Screenshot del ProfileStack](/assets/mdPics/MyLocation.jpg)
    ![Screenshot del ProfileStack](/assets/mdPics/ConfirmLocation.jpg)


## Autoría

Proyecto desarrollado por Pablo Bollero.

- **Perfil de GitHub**: [Link](https://github.com/Pablobollero) 
- **LinkedIn**: [Link](https://www.linkedin.com/in/pablo-bolleroh).
- **Contacto**: En caso de querer ponerse en contacto, hacerlo mediante [LinkedIn](www.linkedin.com/in/pablo-bolleroh) o [Email](mailto:pablo.bolleroh@gmail.com).
    
- **Agradecimientos especiales**: 

	``Profesor =>`` **Gaston Avogadro** [GitHub](https://github.com/GastonAvogadro)
	``Tutor =>`` **Franco David Garay** [GitHub](https://github.com/francogaray)