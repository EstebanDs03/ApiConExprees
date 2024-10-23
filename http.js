// Importa el módulo 'http' nativo de Node.js para crear un servidor HTTP
const http = require("node:http");

// Importa el módulo 'fs' (File System) de Node.js para manejar archivos del sistema
const fs = require("node:fs");

// Define el puerto en el que se ejecutará el servidor. Si no se define la variable de entorno `PORT`, usará el puerto 1234
const desiredPort = process.env.PORT ?? 1234;

// Función para procesar las solicitudes HTTP entrantes
const processRequest = (req, res) => {
  // Establece el tipo de contenido como HTML para todas las respuestas por defecto
  res.setHeader("Content-Type", "text/html");

  // Si la URL solicitada es la raíz ("/"), muestra la página de inicio
  if (req.url == "/") {
    // Establece el código de estado HTTP a 200 (OK)
    res.statusCode = 200;
    // Envia una respuesta HTML como cuerpo del mensaje
    res.end("<h1>Bienvenido a mi página de inicio</h1>");

  // Si la URL solicitada es "/imagen", sirve un archivo de imagen
  } else if (req.url == "/imagen") {
    // Cambia el tipo de contenido a una imagen PNG
    res.setHeader("Content-Type", "image/img.png");

    // Lee el archivo de imagen del sistema de archivos
    fs.readFile("./image.png", (err, data) => {
      // Si ocurre un error al leer el archivo, responde con un error 500 (Error del servidor)
      if (err) {
        res.statusCode = 500;
        req.end("<h1>Error interno del servidor</h1>");
      } else {
        // Si no hay errores, establece el tipo de contenido como imagen PNG y envía la imagen
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });

  // Si la URL solicitada es "/contacto", muestra una página de contacto simple
  } else if (req.url == "/contacto") {
    res.end("<h1>Mi página de Contacto</h1>");

  // Si ninguna de las rutas anteriores coincide, devuelve un error 404 (No encontrado)
  } else {
    // Esta línea tiene un error, debería ser 'res.statusCode = 404' en vez de '=='
    res.statusCode = 404;
    // Envía la página de error 404
    res.end("<h1>404 - Página no encontrada</h1>");
  }
};

// Crea un servidor HTTP y asigna la función 'processRequest' para manejar las solicitudes
const server = http.createServer(processRequest);

// Hace que el servidor escuche en el puerto definido (por defecto 1234) e imprime un mensaje en la consola
server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en http://localhost:${desiredPort}`);
});
