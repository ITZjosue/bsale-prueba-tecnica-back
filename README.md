# bsale-prueba-tecnica-back

<p>El backend está construido con NodeJS y el framework Express.<p></br>
<p>Consiste en las siguientes rutas: </p>
<li> "/api/products":</li>
  - Ruta get "/": Trae todos los productos de la base de datos dentro de un array de objetos.</br></br>
  - Ruta get "/order?dir":Trae todos los productos ordenados de manera ascendente y descendente alfabeticamente, esto dependiendo de una variable de tipo "query".</br></br>
  - Ruta get "/:categoryId": Trae todos los productos que pertenen a una categoría en específico según el id de la categoría elegida.</br></br>
  - Ruta post "/": Se recibe una variable desde un formulario en el front, para encontrar coincidencias en los nombres de los productos de la base de datos y enviarlos al cliente.</br></br>
 <li> "/api/categories":</li></br></br>
  - Ruta get "/": Trae todas las categorías desde la base de datos dentro de un array de objetos.</br></br>
 
  <li> Para hacer las peticiones a la base de datos se usó la dependencia "mysql" de npm </li></br></br>
 <li> Se usó lenguaje SQL para manejar las peticiones a la base de datos </li></br></br>
 <li> Se usaron variables de entorno para ocultar las credenciales de la base de datos </li></br></br>
